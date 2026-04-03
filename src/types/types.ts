import { CategoryKey } from "../constant/Category";

export type TransactionType = {
  id: number;
  title: string;
  amount: number;
  created_at?: string;
  category: CategoryKey;
};
