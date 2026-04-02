import { db } from "./database";

export const useSqlite = () => {
  return {
    db,
    addTransaction,
    getAllTransactions,
    getTransactionById,
    updateTransactionById,
    deleteTransactionById,
  };
};

// 1. CREATE (Insert)
export const addTransaction = async ({
  title,
  amount,
  category,
}: {
  title: string;
  amount: number;
  category: string;
}) => {
  try {
    // ALWAYS use '?' for values to prevent SQL injection and syntax errors!
    const result = await db.runAsync(
      `INSERT INTO transactions (title, amount, category) VALUES (?, ?, ?);`,
      [title, amount, category],
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
    const result = await db.getFirstAsync(
      `SELECT * FROM transactions WHERE id = ?;`,
      [id],
    );
    return result;
  } catch (error) {
    console.error("getAllTransactions: ", error);
  }
};

// 3. UPDATE
export const updateTransactionById = async (title: string, id: number) => {
  try {
    const result = await db.runAsync(
      `UPDATE transactions SET title = ? WHERE id = ?;`,
      [id],
    );
    return result.lastInsertRowId;
  } catch (error) {
    console.error("updateTransactionById: ", error);
  }
};

// 4. DELETE
export const deleteTransactionById = async (id: number) => {
  try {
    const result = await db.runAsync(`DELETE FROM transactions WHERE id = ?;`, [
      id,
    ]);
    return;
  } catch (error) {
    console.error("deleteTransactionById: ", error);
  }
};
