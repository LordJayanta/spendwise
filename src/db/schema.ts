import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const transactions = sqliteTable("transactions", {
  id: integer("id").primaryKey({ autoIncrement: true }).notNull(), // id INTEGER PRIMARY KEY AUTOINCREMENT,
  title: text("title").notNull(), // title TEXT NOT NULL,
  amount: real("amount").notNull(), // amount REAL NOT NULL
  category: text("category").notNull(), // category TEXT NOT NULL,
  note: text("note"), //note TEXT
  created_at: text("created_at").default("CURRENT_TIMESTAMP").notNull(), // created_at TEXT DEFAULT CURRENT_TIMESTAMP
});

export type Transaction = typeof transactions.$inferInsert;
