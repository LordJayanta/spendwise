import { COLORS } from '@/src/shared/constant/colors'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function EnterApp({ onPress }: { onPress: () => void }) {
    return (
        <View style={{ paddingHorizontal: 24 }}>
            <TouchableOpacity
                onPress={onPress}
                style={{ height: 54, alignItems: 'center', justifyContent: 'center', borderRadius: 1000, width: '100%', backgroundColor: COLORS.primary }}
            >
                <Text style={{ color: COLORS.light, fontSize: 16 }}>Enter App</Text>
            </TouchableOpacity>
        </View>
    )
}