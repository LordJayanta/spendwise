import { COLORS } from '@/src/shared/constant/colors'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function OnbordForm({ label, children, action }: {
    label: string,
    children: React.ReactNode,
    action: () => void
}) {
    return (
        <View style={styles.form}>
            <View style={styles.lableContainer}>
                <Text style={styles.lable}>{label}</Text>
            </View>
            <View style={styles.inputContainer}>
                {children && children}
                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={action}
                >
                    <Ionicons name="arrow-forward-sharp" size={24} color={COLORS.light} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={[styles.note, { textAlign: 'center' }]} >*NOTE: Those Data Store in Your Device.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        height: 190,
        paddingHorizontal: 32,
        paddingVertical: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
    },
    lableContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        paddingHorizontal: 8,
    },
    lable: {
        fontSize: 16,
        fontFamily: 'Inter',
        fontWeight: 'bold',
        color: COLORS.light,
    },
    note: {
        fontSize: 12,
        fontFamily: 'Inter',
        fontWeight: 'regular',
        color: COLORS.tertiary,
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
        overflow: 'hidden',
    },
    iconButton: {
        width: 54,
        height: 54,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 1000,
    },
});
