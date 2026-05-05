import { create } from "zustand";
import { AuthType, checkBiometricAuth } from "../utils";

type Store = {
  isUnlocked: boolean;

  lock: () => void;
  unlock: () => void;

  toggleUnlock: () => void;
};

export const useLocalAuthStore = create<Store>((set, get) => ({
  isUnlocked: false,

  lock: () => set({ isUnlocked: false }),
  unlock: () => set({ isUnlocked: true }),
  toggleUnlock: async () => {
    const res = (await checkBiometricAuth()) as AuthType;

    if (res?.success) {
      set({ isUnlocked: true });
    }

    if (res?.error) {
      set({ isUnlocked: false });
    }
  },
}));
