import { TransactionProvider } from "@/src/context/TransactionContext";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <TransactionProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style="dark" />
          <Slot />
          {/* <Stack />  */}
          {/* NOTE: Dont use it in this suctucion it will not work properly, use : SafeAreaProvider > SafeAreaView > Slot*/}
        </SafeAreaView>
      </SafeAreaProvider>
    </TransactionProvider>
  );
}
