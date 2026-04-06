import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabaseSync("sw_transactions.db");

export const initDb = async () => {
  try {
    const version = await db.getFirstAsync<{ user_version: number }>(
      "PRAGMA user_version;",
    );

    // if version is 0, this is the first time the app has been opened,
    // so we need to create the table
    if (version?.user_version === 0) {
      db.execSync(`
        CREATE TABLE IF NOT EXISTS transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            amount REAL NOT NULL,
            category TEXT NOT NULL,
            note TEXT,
            created_at TEXT DEFAULT CURRENT_TIMESTAMP
        );
    `);

      // Set version to 1 so this block never runs again
      await db.runAsync("PRAGMA user_version = 1;");
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
    //   await db.execAsync(`ALTER TABLE transactions ADD COLUMN new_column_name TEXT;`);
    //   await db.runAsync(`PRAGMA user_version = <number_next_version>;`);
    // }
  } catch (error) {
    console.error("Error creating db table", error);
  }
};
