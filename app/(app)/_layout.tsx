import LockScreen from "@/src/features/biometric-auth/components/lockScreen";
import { useLocalAuthStore } from "@/src/features/biometric-auth/store/useLocalAuthStore";
import { useUserStore } from "@/src/features/onboarding/store/useUserStore";
import { useSettingStore } from "@/src/features/settings/store/useSettingStore";
import { useTransactionStore } from "@/src/features/transactions/store/useTransactionStore";
import PageLoader from "@/src/shared/components/page-loader";
import { Redirect, Stack } from "expo-router";
import { useEffect } from "react";

export default function AppLayout() {
    const { isLoading, loadDatabase } = useTransactionStore();
    const { hasFinishedOnboarding, loadUser } = useUserStore()

    const { isUnlocked, toggleUnlock } = useLocalAuthStore();
    const {isEnableBiometricAuth, loadSettings} = useSettingStore();

    useEffect(() => {
        loadUser();
        loadDatabase();
        loadSettings();
        if(isEnableBiometricAuth) toggleUnlock();
    }, [loadDatabase, loadUser, loadSettings, toggleUnlock, isEnableBiometricAuth]);

    if (isLoading) return <PageLoader />;
    if (!isUnlocked && isEnableBiometricAuth) return <LockScreen />;
    if (!hasFinishedOnboarding) return <Redirect href={'/(onboarding)/onboarding'} />;

    return (
        <Stack screenOptions={{ headerShown: false }} >
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="create" />
        </Stack>
    )
}