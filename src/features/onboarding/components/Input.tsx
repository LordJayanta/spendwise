import { COLORS } from '@/src/shared/constant/colors'
import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export default function Input({ value, onChange }: {
    value: string,
    onChange: (text: string) => void,
}) {
    return (
        <>
            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                placeholderTextColor={COLORS.text}
                cursorColor={COLORS.primary}
                value={value}
                onChangeText={onChange}
            />
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        width: 'auto',
        borderWidth: 1,
        color: COLORS.light,
        borderColor: COLORS.primary,
        borderRadius: 1000,
        paddingHorizontal: 24,
        paddingVertical: 16
    },
})