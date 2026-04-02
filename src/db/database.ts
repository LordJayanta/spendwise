import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabaseSync("sw_transactions.db");

export const initDb = () => {
  try {
    db.execSync(`
        CREATE TABLE IF NOT EXISTS transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            amount REAL NOT NULL,
            category TEXT NOT NULL,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP
        );
    `);
  } catch (error) {
    console.error("Error creating db table", error);
  }
};
