import { TransactionProvider } from "@/src/context/TransactionContext";
import { Stack } from "expo-router";

export default function AppLayout() {
    return (
        <TransactionProvider>
            <Stack screenOptions={{ headerShown: false }} >
                <Stack.Screen name="index" />
                <Stack.Screen name="create" />
            </Stack>
        </TransactionProvider>
    )
}