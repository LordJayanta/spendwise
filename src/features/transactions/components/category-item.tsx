import { COLORS } from "@/src/shared/constant/colors";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { type IconName } from '@/src/features/transactions/constant/Category';

export default function CategoryItem({ active = false, name, icon }: { active?: boolean, name: string , icon: IconName}) {
    return (
        <View style={styles.container}>
            <View style={[
                styles.iconContainer,
                { backgroundColor: active ? COLORS.primary : COLORS.gray },
                active &&  {boxShadow: '0px 8px 20px rgba(184, 255, 234, 0.3)', }
            ]}>
                <Ionicons name={icon} color={COLORS.light} size={16} />
            </View>
            <Text
                style={[
                    styles.text,
                    { color: active ? COLORS.primary : COLORS.text }
                ]}
            >{name}</Text>
        </View>
    )
}



export const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
    },
    text: {
        fontSize: 12,
        fontFamily: "Inter",
        lineHeight: 16,
        fontWeight: 500, // "medium"
        textTransform: "capitalize",
    },
    iconContainer: {
        width: 64,
        height: 64,
        padding: 12,
        borderRadius: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
})