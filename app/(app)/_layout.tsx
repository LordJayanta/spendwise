import PageLoader from "@/src/components/page-loader";
import { useTransactionStore } from "@/src/store/useTransactionStore";
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