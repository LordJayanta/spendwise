import { useUserStore } from "@/src/features/onboarding/store/useUserStore";
import { useTransactionStore } from "@/src/features/transactions/store/useTransactionStore";
import PageLoader from "@/src/shared/components/page-loader";
import { Redirect, Stack } from "expo-router";
import { useEffect } from "react";

export default function AppLayout() {
    const { isLoading, loadDatabase } = useTransactionStore();
    const { hasFinishedOnboarding, loadUser } = useUserStore()

    useEffect(() => {
        loadDatabase();
        loadUser();
    }, [loadDatabase, loadUser]);

    if (isLoading) return <PageLoader />;
    if (!hasFinishedOnboarding) return <Redirect href={'/(onboarding)/onboarding'} />;

    return (
        <Stack screenOptions={{ headerShown: false }} >
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="create" />
        </Stack>
    )
}