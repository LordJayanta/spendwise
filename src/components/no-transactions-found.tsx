import React from 'react'
import { Text, View } from 'react-native'
import { COLORS } from '../constant/colors'

export default function NoTransactionsFound() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 16, fontWeight: 'semibold', color: COLORS.text }}>NoTransactionsFound</Text>
      <Text style={{ fontSize: 12, fontWeight: 'semibold', color: COLORS.text }}>Create your first transaction, by clicking the add button below</Text>
    </View>
  )
}