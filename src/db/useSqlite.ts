import { desc, eq, gt, lt, sql } from "drizzle-orm";
import { useMemo } from "react";
import { SummaryType } from "../types/types";
import { db, initDb } from "./database";
import { Transaction, transactions } from "./schema";

export const useSqlite = () => {
  return useMemo(
    () => ({
      db,
      getSummary,
      addTransaction,
      getAllTransactions,
      getTransactionById,
      updateTransactionById,
      deleteTransactionById,
    }),
    [],
  );
};

// Get Summary of all transactions
export const getSummary = async () => {
  await initDb();
  type resType = { value: number } | null;

  const balance: resType[] = await db
    .select({
      value: sql<number>`COALESCE(SUM(${transactions.amount}), 0)`,
    })
    .from(transactions);

  const income: resType[] = await db
    .select({
      value: sql<number>`COALESCE(SUM(${transactions.amount}), 0)`,
    })
    .from(transactions)
    .where(gt(transactions.amount, 0));

  const expense: resType[] = await db
    .select({
      value: sql<number>`COALESCE(SUM(${transactions.amount}), 0)`,
    })
    .from(transactions)
    .where(lt(transactions.amount, 0));

  const Summary: SummaryType = {
    balance: Math.abs(Number(balance[0]?.value)),
    income: Math.abs(Number(income[0]?.value)),
    expense: Math.abs(Number(expense[0]?.value)),
  };

  return Summary;
};

// 1. CREATE (Insert)
export const addTransaction = async ({
  title,
  amount,
  category,
  note,
}: {
  title: string;
  amount: number;
  category: string;
  note: string;
}) => {
  try {
    await initDb();
    const result = await db.insert(transactions).values({
      title,
      amount,
      category,
      note,
    });

    return result.lastInsertRowId;
  } catch (error) {
    console.error("createTransaction: ", error);
  }
};

// 2. READ (Select All)
export const getAllTransactions = async () => {
  try {
    await initDb();
    const result: Transaction[] = await db
      .select()
      .from(transactions)
      .orderBy(desc(transactions.id))
      .all();

    return result;
  } catch (error) {
    console.error("getAllTransactions: ", error);
  }
};

// 3. READ (Select One)
export const getTransactionById = async (id: number) => {
  try {
    await initDb();
    const result: Transaction[] = await db
      .select()
      .from(transactions)
      .where(eq(transactions.id, id));

    return result[0];
  } catch (error) {
    console.error("getTransactionById: ", error);
  }
};

// 3. UPDATE
export const updateTransactionById = async ({
  title,
  category,
  amount,
  id,
  note,
}: {
  title: string;
  category: string;
  amount: number;
  id: number;
  note: string;
}) => {
  try {
    await initDb();
    const result = await db
      .update(transactions)
      .set({ title, amount, category, note })
      .where(eq(transactions.id, id));
    return result.changes;
  } catch (error) {
    console.error("updateTransactionById: ", error);
  }
};

// 4. DELETE
export const deleteTransactionById = async (id: number) => {
  try {
    await initDb();
    await db.delete(transactions).where(eq(transactions.id, id));
    return;
  } catch (error) {
    console.error("deleteTransactionById: ", error);
  }
};

export const sqlite = {
  db,
  getSummary,
  addTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransactionById,
  deleteTransactionById,
};
