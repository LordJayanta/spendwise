import { gt, sql, sum } from "drizzle-orm";
import { useMemo } from "react";
import { db, initDb } from "../../../shared/db/database";
import { transactions } from "../../../shared/db/schema";

export const useSqlite = () => {
  return useMemo(
    () => ({
      db,
      getIncomeData,
    }),
    [],
  );
};

// Get Income
export const getIncomeData = async () => {
  try {
    await initDb();
    const data = await db
      .select({
        month: sql<string>`strftime('%Y-%m', ${transactions.created_at})`.as(
          "month",
        ),
        totalIncome: sum(transactions.amount).mapWith(Number),
      })
      .from(transactions)
      .where(gt(transactions.amount, 0))
      .groupBy(sql`month`)
      .orderBy(sql`month DESC`);
    return data;
  } catch (error) {
    console.error("getIncome: ", error);
  }
};

export const sqlite = {
  db,
  getIncomeData,
};
