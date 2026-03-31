import { CategoryKey } from "../constant/Category";

export type TransactionType = {
  id: number;
  title: string;
  amount: number;
  date: string;
  time: string;
  category: CategoryKey;
};
