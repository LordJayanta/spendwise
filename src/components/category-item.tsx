import { COLORS } from "@/src/constant/colors";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';


export default function CategoryItem({ active = false }: { active?: boolean }) {
    return (
        <View style={styles.container}>
            <View style={[
                styles.iconContainer,
                { backgroundColor: active ? COLORS.primary : COLORS.gray },
                active && { // TODO: not working is Android
                    shadowColor: '#B8FFEA',
                    shadowOpacity: 0.30,
                    shadowOffset: { width: 0, height: 8 },
                    shadowRadius: 20,
                }
            ]}>
                <Ionicons name="bag-outline" color={COLORS.light} size={16} />
            </View>
            <Text
                style={[
                    styles.text,
                    { color: active ? COLORS.primary : COLORS.text }
                ]}
            >category-item</Text>
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