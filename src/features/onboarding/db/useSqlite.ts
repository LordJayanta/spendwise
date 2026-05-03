import { db, initDb } from "@/src/shared/db/database";
import { user, type User } from "@/src/shared/db/schema";
import { eq } from "drizzle-orm";
import { SQLiteRunResult } from "expo-sqlite";

const creatUser = async ({ name, currency, hasFinishedOnboarding }: User) => {
  try {
    await initDb();
    const result = await db.insert(user).values({
      name,
      currency,
      hasFinishedOnboarding,
    });

    return result.lastInsertRowId;
  } catch (error) {
    console.error("createUser: ", error);
  }
};

const getUser = async () => {
  try {
    await initDb();
    const existingUser: User[] = await db.select().from(user);

    return existingUser[0];
  } catch (error) {
    console.error("getUser: ", error);
  }
};

const setUserNameById = async (id: User["id"], name: string) => {
  if (!id || !name) return;

  try {
    await initDb();

    const res: SQLiteRunResult = await db
      .update(user)
      .set({ name })
      .where(eq(user.id, id));

    return res.changes;
  } catch (error) {
    console.error("setNameById: ", error);
  }
};

const setCurrencyById = async (id: User["id"], currency: string) => {
  if (!id || !currency) return;

  try {
    await initDb();

    const res: SQLiteRunResult = await db
      .update(user)
      .set({ currency })
      .where(eq(user.id, id));

    return res.changes;
  } catch (error) {
    console.error("setCurrencyById: ", error);
  }
};

export const sqlite = {
  creatUser,
  getUser,
  setUserNameById,
  setCurrencyById,
};
