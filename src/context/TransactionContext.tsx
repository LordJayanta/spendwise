import { createContext, useContext, useState } from "react";
import { SummaryType, TransactionType } from "../types/types";

type contextType = {
    isLoading: boolean,
    toggleLoading: () => void,
    summary: SummaryType,
    transactions: TransactionType[]
}

export const TransactionContext = createContext<contextType | undefined>(undefined);

export const TransactionProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [summary, setSummary] = useState<SummaryType>({expence: 0, income: 0, balance: 0});
    const [transactions, setTransactions] = useState<TransactionType[]>([]);

    const toggleLoading = () => setIsLoading(!isLoading);

    return (
        <TransactionContext.Provider value={{ isLoading, toggleLoading, summary, transactions }}>
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
