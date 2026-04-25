import { CategoryKey } from "../constant/Category";

export type TransactionType = {
  id: number;
  title: string;
  amount: number;
  created_at?: string;
  note?: string;
  category: CategoryKey;
};

export type SummaryType = {
  balance: number;
  income: number;
  expense: number;
};
