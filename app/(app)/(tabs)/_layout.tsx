import { COLORS } from "@/src/constant/colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";


export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{ 
                headerShown: false,
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.text,
                tabBarStyle: { backgroundColor: COLORS.surface },
                headerTintColor: COLORS.primary,
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ focused, color }) => (<Ionicons name={focused ? "home" : "home-outline"} color={color} size={24} />)
                }}
            />
            <Tabs.Screen
                name="analytics"
                options={{
                    tabBarIcon: ({ focused, color }) => (<Ionicons name={focused ? "analytics" : "analytics-outline"} color={color} size={24} />)
                }}
            />
        </Tabs>
    )
}