import { drizzle } from "drizzle-orm/expo-sqlite";
import * as SQLite from "expo-sqlite";

export const expodb = SQLite.openDatabaseSync("sw_transactions.db", {
  enableChangeListener: true,
});

export const db = drizzle(expodb);

export const initDb = async () => {
  try {
    // Enable WAL mode when available, but don't fail if the platform does not support it.
    try {
      await expodb.execAsync("PRAGMA journal_mode = WAL;");
    } catch (error) {
      console.warn("WAL mode unavailable, continuing without it.", error);
    }

    // Always ensure the transactions table exists before running any queries.
    await expodb.execAsync(`
      CREATE TABLE IF NOT EXISTS transactions (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          amount REAL NOT NULL,
          category TEXT NOT NULL,
          note TEXT,
          created_at TEXT DEFAULT CURRENT_TIMESTAMP
      );
    `);

    const version = await expodb.getFirstAsync<{ user_version: number }>(
      "PRAGMA user_version;",
    );

    const currentVersion = version?.user_version ?? 0;
    if (currentVersion === 0) {
      await expodb.runAsync("PRAGMA user_version = 1;");
    }

    /*
      ## NOTE ##
      ------------------------
      This is an example of how to add a new column to the table.
      coz, we don't want user loose ther data. in production we use migration
      ------------------------
    */

    // if (version?.user_version === 1) {
    //   console.log("Altering table to add note column...");
    //   await expodb.execAsync(`ALTER TABLE transactions ADD COLUMN new_column_name TEXT;`);
    //   await expodb.runAsync(`PRAGMA user_version = <number_next_version>;`);
    // }
  } catch (error) {
    console.error("Error initializing database", error);
    throw error;
  }
};
