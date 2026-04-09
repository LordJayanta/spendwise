import { useMemo } from "react";
import { SummaryType } from "../types/types";
import { db, initDb } from "./database";

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

export const LoadDatabase = async () => {
  await initDb();
  console.log("Database initialized");
};

// Get Summary of all transactions
export const getSummary = async () => {
  type resType = { value: number } | null;

  await LoadDatabase();

  const balance: resType = await db.getFirstAsync(
    `SELECT COALESCE(SUM(amount), 0) AS value FROM transactions;`,
  );
  const income: resType = await db.getFirstAsync(
    `SELECT COALESCE(SUM(amount), 0) AS value FROM transactions WHERE amount > 0;`,
  );
  const expence: resType = await db.getFirstAsync(
    `SELECT COALESCE(SUM(amount), 0) AS value FROM transactions WHERE amount < 0;`,
  );

  const Summary: SummaryType = {
    balance: Number(balance?.value),
    income: Number(income?.value),
    expence: Number(expence?.value),
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
    await LoadDatabase();
    // ALWAYS use '?' for values to prevent SQL injection and syntax errors!
    const result = await db.runAsync(
      `INSERT INTO transactions (title, amount, category, note) VALUES (?, ?, ?, ?);`,
      [title, amount, category, note],
    );

    console.log("createTransaction: ", result);

    return result.lastInsertRowId;
  } catch (error) {
    console.error("createTransaction: ", error);
  }
};

// 2. READ (Select All)
export const getAllTransactions = async () => {
  try {
    await LoadDatabase();
    const result = await db.getAllAsync(
      `SELECT * FROM transactions ORDER BY id DESC;`,
    );
    console.log("getAllTransactions: ", result);
    return result;
  } catch (error) {
    console.error("getAllTransactions: ", error);
  }
};

// 3. READ (Select One)
export const getTransactionById = async (id: number) => {
  try {
    await LoadDatabase();
    const result = await db.getFirstAsync(
      `SELECT * FROM transactions WHERE id = ?;`,
      [id],
    );
    return result;
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
    await LoadDatabase();
    const result = await db.runAsync(
      `UPDATE transactions SET title = ? , category = ?, amount = ?, note = ? WHERE id = ?;`,
      [title, category, amount, note, id],
    );
    return result.changes;
  } catch (error) {
    console.error("updateTransactionById: ", error);
  }
};

// 4. DELETE
export const deleteTransactionById = async (id: number) => {
  try {
    await LoadDatabase();
    await db.runAsync(`DELETE FROM transactions WHERE id = ?;`, [id]);
    return;
  } catch (error) {
    console.error("deleteTransactionById: ", error);
  }
};
