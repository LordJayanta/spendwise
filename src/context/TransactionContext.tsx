import { createContext, useContext, useState } from "react";
import { useSqlite } from "../db/useSqlite";
import { SummaryType, TransactionType } from "../types/types";

type contextType = {
    isLoading: boolean,
    toggleLoading: () => void,
    summary: SummaryType,
    transactions: TransactionType[],
    LoadDatabase: () => void,
    addTransaction: (transaction: TransactionType) => void,
    updateTransaction: (transaction: TransactionType) => void,
    deleteTransaction: (id: TransactionType['id']) => void
}

export const TransactionContext = createContext<contextType | undefined>(undefined);

export const TransactionProvider = ({ children }: { children: React.ReactNode }) => {
    const sqlite = useSqlite();

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [summary, setSummary] = useState<SummaryType>({ expence: 0, income: 0, balance: 0 });
    const [transactions, setTransactions] = useState<TransactionType[]>([]);

    const toggleLoading = () => setIsLoading(!isLoading);

    const addIncome = async (amount: number) => setSummary(prev => ({
        ...prev,
        income: prev.income + amount,
        balance: prev.balance + amount
    }));

    const addExpence = async (amount: number) => setSummary(prev => ({
        ...prev,
        expence: prev.expence + amount,
        balance: prev.balance - amount
    }));


    const updateSummary = async (value: number | SummaryType) => {
        /**
         * Updates the summary state.
         *
         * Usage:
         * 1. Pass a number to update via amount:
         *    - Positive → treated as income
         *    - Negative → treated as expense
         *    Example: updateSummary(1000)
         *
         * 2. Pass a SummaryType object to replace the summary:
         *    Example: updateSummary({
         *      balance: 1000,
         *      expence: 1000,
         *      income: 1000
         *    })
         */
        if (typeof value === 'number') {
            if (value > 0) addIncome(Math.abs(value));
            else addExpence(Math.abs(value));
        } else {
            setSummary(value);
        }
    }

    const LoadDatabase = async () => {
        setIsLoading(true);
        const summary = await sqlite.getSummary();
        const transactions: TransactionType[] | undefined = await sqlite.getAllTransactions();
        setSummary(summary);
        if (typeof transactions !== 'undefined') setTransactions(transactions ?? []);
        setIsLoading(false);
    }

    const addTransaction = async (transaction: TransactionType) => {
        // Add to database
        const resultId = await sqlite.addTransaction({
            title: transaction.title,
            amount: transaction.amount,
            category: transaction.category,
            note: String(transaction.note)
        });

        // update Context 
        if (resultId) {
            transaction.id = Number(resultId);
            setTransactions(prev => [transaction, ...prev]);

            updateSummary(transaction.amount);
        }
    }

    const updateTransaction = async (transaction: TransactionType) => {
        // update to database
        const result: number | undefined = await sqlite.updateTransactionById({
            title: transaction.title,
            amount: transaction.amount,
            category: transaction.category,
            id: Number(transaction.id),
            note: String(transaction.note)
        });

        if (typeof result === 'number' && result > 0) {
            // TODO
            updateSummary(-Number(transactions.find(t => t.id === transaction.id)?.amount))
            setTransactions(prev => prev.map(t => t.id === transaction.id ? transaction : t));

            // const getSummary = await sqlite.getSummary();
            // updateSummary(getSummary);
        }
    }

    const deleteTransaction = async (id: TransactionType['id']) => {
        sqlite.deleteTransactionById(id).then(() => {
            // TODO
            const oldtransactionValue = transactions.find(t => t.id === id)?.amount as number
            const isExpence = oldtransactionValue < 0;

            if (isExpence) {
                /**
                 * if deleting an expence transaction,  just update the balance and expence
                 */
                setSummary((prev) => ({
                    ...prev,
                    balance: prev.balance+Math.abs(oldtransactionValue),
                    expence: prev.expence-Math.abs(oldtransactionValue)
                }))
            } else {
                /**
                 * if deleting an income transaction, just update the balance and income
                 */
                setSummary((prev) => ({
                    ...prev,
                    balance: prev.balance-Math.abs(oldtransactionValue),
                    income: prev.income-Math.abs(oldtransactionValue)
                }))
            }
            setTransactions(prev => prev.filter(t => t.id !== id));
        });
    }

    return (
        <TransactionContext.Provider value={{
            isLoading,
            toggleLoading,
            summary,
            transactions,
            LoadDatabase,
            addTransaction,
            updateTransaction,
            deleteTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}


export const useTransaction = () => {
    const context = useContext(TransactionContext);
    if (context === undefined) {
        throw new Error("useTransaction must be used within a TransactionProvider.")
    }
    return context
};
