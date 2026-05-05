import { COLORS } from '@/src/shared/constant/colors'
import { IoniconsName } from '@/src/shared/type/type'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {
  iconName: IoniconsName;
  title: string;
  children?: React.ReactNode
}
export default function Container({
  iconName,
  title,
  children
}: Props) {
  return (
    <View style={styles.section}>
      <View style={styles.headerContainer}>
        <Ionicons name={iconName} size={16} color={COLORS.primary} />
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.container}>
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    display: 'flex',
    gap: 16,
    flexDirection: 'column',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 'bold',
    color: COLORS.light,
    textTransform: 'uppercase'
  },
  container: {
    borderRadius: 16,
    backgroundColor: COLORS.surface
  }
})