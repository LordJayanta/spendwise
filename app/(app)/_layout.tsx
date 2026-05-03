import { useTransactionStore } from "@/src/features/transactions/store/useTransactionStore";
import PageLoader from "@/src/shared/components/page-loader";
import { Redirect, Stack } from "expo-router";
import { useEffect, useState } from "react";

export default function AppLayout() {
    const { isLoading, loadDatabase } = useTransactionStore();
    const [isOnBoardedDone, setIsOnBoardedDone] = useState(false);

    useEffect(() => {
        loadDatabase();
    }, [loadDatabase]);

    if (isLoading) return <PageLoader />;
    if(!isOnBoardedDone) return <Redirect href={'/(onboarding)/onboarding'}/>;

    return (
        <Stack screenOptions={{ headerShown: false }} >
            <Stack.Screen name="(tabs)"/>
            <Stack.Screen name="create" />
        </Stack>
    )
}