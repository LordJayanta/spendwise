import { useTransactionStore } from "@/src/features/transactions/store/useTransactionStore";

export function useAnalytics() {
  const { summary, transactions } = useTransactionStore();

  return {
    summary,
    transactions,
  };
}
