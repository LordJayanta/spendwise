import * as LocalAuthentication from "expo-local-authentication";

export type AuthType = {
  success: boolean;
  error: LocalAuthentication.LocalAuthenticationError;
  warning?: string;
};

export const checkBiometricAuth = async () => {
  const hasHardware = await LocalAuthentication.hasHardwareAsync();
  if (!hasHardware) {
    return {
      hasHardware,
      message: "Biometric authentication is not available on this device.",
    };
  }

  const isEnrolled = await LocalAuthentication.isEnrolledAsync();

  if (!isEnrolled) {
    return {
      isEnrolled,
      message: "Biometric authentication is not Enabled on this device.",
    };
  }

  const authType = await LocalAuthentication.AuthenticationType.FINGERPRINT;

  if (hasHardware && isEnrolled && authType) {
    return await LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate to Unlock SpendWise",
      cancelLabel: "Cancel",
      fallbackLabel: "Use Password",
      disableDeviceFallback: false,
    });
  }
};
