import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { AuthType, checkBiometricAuth } from "../../biometric-auth/utils";

type Settings = {
  isEnableBiometricAuth: boolean;
};

type Store = {
  isEnableBiometricAuth: boolean;

  loadSettings: () => void;
  enableBiometricAuth: () => void;
  disableBiometricAuth: () => void;
};

export const useSettingStore = create<Store>((set, get) => ({
  isEnableBiometricAuth: false,

  loadSettings: async () => {
    const settings = await AsyncStorage.getItem("sw_settings");

    if (settings) {
      const parsedSettings = JSON.parse(settings) as Settings;
      set({ isEnableBiometricAuth: parsedSettings.isEnableBiometricAuth });
    }
  },
  enableBiometricAuth: async () => {
    const result = (await checkBiometricAuth()) as AuthType;

    if (result?.success) {
      const settings: Settings = {
        isEnableBiometricAuth: true,
      };
      await AsyncStorage.setItem("sw_settings", JSON.stringify(settings));
      set({ isEnableBiometricAuth: true });
    }
  },
  disableBiometricAuth: async () => {
    const result = (await checkBiometricAuth()) as AuthType;

    if (result?.success) {
      const settings: Settings = {
        isEnableBiometricAuth: false,
      };
      await AsyncStorage.setItem("sw_settings", JSON.stringify(settings));
      set({ isEnableBiometricAuth: false });
    }
  },
}));
