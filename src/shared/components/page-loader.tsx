import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { COLORS } from '../constant/colors'


export default function PageLoader() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.natural
        }}>
            <ActivityIndicator size={'large'} color={COLORS.primary} />
        </View>
    )
}