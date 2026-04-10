import { createContext, useContext, useState } from "react";
import { useSqlite } from "../db/useSqlite";
import { SummaryType, TransactionType } from "../types/types";

type contextType = {
    isLoading: boolean,
    toggleLoading: () => void,
    summary: SummaryType,
    transactions: TransactionType[],
    LoadDatabase: () => void
}

export const TransactionContext = createContext<contextType | undefined>(undefined);

export const TransactionProvider = ({ children }: { children: React.ReactNode }) => {
    const sqlite = useSqlite();

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [summary, setSummary] = useState<SummaryType>({ expence: 0, income: 0, balance: 0 });
    const [transactions, setTransactions] = useState<TransactionType[]>([]);

    const toggleLoading = () => setIsLoading(!isLoading);

    const LoadDatabase = async () => {
        setIsLoading(true);
        const summary = await sqlite.getSummary();
        const transactions: TransactionType[] | undefined = await sqlite.getAllTransactions();
        setSummary(summary);
        if (typeof transactions !== 'undefined') setTransactions(transactions);
        setIsLoading(false);
    }

    return (
        <TransactionContext.Provider value={{ isLoading, toggleLoading, summary, transactions, LoadDatabase }}>
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
