import { sql } from "drizzle-orm";
import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const transactions = sqliteTable("transactions", {
  id: integer("id").primaryKey({ autoIncrement: true }).notNull(), // id INTEGER PRIMARY KEY AUTOINCREMENT,
  title: text("title").notNull(), // title TEXT NOT NULL,
  amount: real("amount").notNull(), // amount REAL NOT NULL
  category: text("category").notNull(), // category TEXT NOT NULL,
  note: text("note"), //note TEXT
  created_at: text("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(), // created_at TEXT DEFAULT CURRENT_TIMESTAMP
});

export type Transaction = typeof transactions.$inferInsert;

export const user = sqliteTable("user", {
  id: integer("id").primaryKey({ autoIncrement: true }).notNull(), // id INTEGER PRIMARY KEY AUTOINCREMENT,
  name: text("name").notNull(), // name TEXT NOT NULL,
  currency: text("currency").notNull(), // currency TEXT NOT NULL
  hasFinishedOnboarding: integer("hasFinishedOnboarding", { mode: "boolean" })
    .notNull()
    .default(false), // hasFinishedOnboarding INTEGER DEFAULT 0
});

export type User = typeof user.$inferInsert;
