import PageLoader from "@/src/components/page-loader";
import { useTransaction } from "@/src/context/TransactionContext";
import { Stack } from "expo-router";
import { useEffect } from "react";

export default function AppLayout() {
    const { isLoading, LoadDatabase } = useTransaction();

    useEffect(() => {
        LoadDatabase();
    }, []);

    if (isLoading) return <PageLoader />;

    return (
        <Stack screenOptions={{ headerShown: false }} >
            <Stack.Screen name="index" />
            <Stack.Screen name="create" />
        </Stack>
    )
}