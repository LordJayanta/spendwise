import { type User } from "@/src/shared/db/schema";
import { create } from "zustand";
import { sqlite } from "../db/useSqlite";

interface Store extends User {
  // states
  isLoading: boolean;

  // Actions
  toggleLoading: () => void;

  loadUser: () => Promise<void>;
  createUser: ({
    name,
    currency,
    hasFinishedOnboarding,
  }: User) => Promise<void>;
  setUserName: (id: User["id"], name: string) => Promise<void>;
  setCurrency: (id: User["id"], currency: string) => Promise<void>;
}

export const useUserStore = create<Store>((set, get) => ({
  id: undefined,
  name: "",
  currency: "",
  hasFinishedOnboarding: false,
  isLoading: false,

  toggleLoading: () => set((state) => ({ isLoading: !state.isLoading })),

  loadUser: async () => {
    const res = await sqlite.getUser();

    if (res) set({ ...res });
  },

  createUser: async ({
    name,
    currency,
    hasFinishedOnboarding = true,
  }: User) => {
    try {
      const userdata = { name, currency, hasFinishedOnboarding };

      const userId = await sqlite.creatUser(userdata);

      if (userId) set({ id: userId, ...userdata });
    } catch (error) {
      console.error("createUser: ", error);
    }
  },

  setUserName: async (id: User["id"], name: string) => {
    try {
      const res: number | undefined = await sqlite.setUserNameById(id, name);

      if (Number(res) > 0) set({ name });
    } catch (error) {
      console.error("setUserName: ", error);
    }
  },

  setCurrency: async (id: User["id"], currency: string) => {
    try {
      const res: number | undefined = await sqlite.setCurrencyById(
        id,
        currency,
      );

      if (Number(res) > 0) set({ currency });
    } catch (error) {
      console.error("setCurrency: ", error);
    }
  },
}));
