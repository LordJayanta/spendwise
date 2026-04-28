import { useTransactionStore } from "@/src/features/transactions/store/useTransactionStore";
import PageLoader from "@/src/shared/components/page-loader";
import { Stack } from "expo-router";
import { useEffect } from "react";

export default function AppLayout() {
    const { isLoading, loadDatabase } = useTransactionStore();

    useEffect(() => {
        loadDatabase();
    }, [loadDatabase]);

    if (isLoading) return <PageLoader />;

    return (
        <Stack screenOptions={{ headerShown: false }} >
            <Stack.Screen name="(tabs)"/>
            <Stack.Screen name="create" />
        </Stack>
    )
}