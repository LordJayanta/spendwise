import { Ionicons, } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constant/colors';

export default function TransactionItem() {
  return (
    <View style={styles.containter}>
      <View style={styles.subContainter}>
        <View style={[styles.iconContainer, { backgroundColor: "#353534" }]}>
          <Ionicons name="cash" color={COLORS.light} size={20} />
        </View>

        <View style={styles.TextContainer}>
          <Text style={styles.TransactionTitle}>Salary</Text>
          <View style={styles.subTextContainer}>
            <Text style={styles.subText}>$199</Text>
            <View style={styles.dot}>
              <Ionicons name="ellipse" color={COLORS.text} size={4.75} />
            </View>
            <Text style={styles.subText}>6:00 AM</Text>
          </View>
        </View>
      </View>


      <Text style={[styles.TransactionAmount, true ? { color: '#4AE183' } : { color: '#FFB4A9' }]}>{true ? '+' : '-'} $199</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  containter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  TransactionAmount: {
    fontSize: 18,
    fontWeight: "semibold",
  },
  subContainter: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
  iconContainer: {
    width: 44,
    height: 44,
    padding: 12,
    borderRadius: 1000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  TextContainer: {},
  TransactionTitle: {
    fontSize: 16,
    fontWeight: "semibold",
    color: COLORS.light
  },
  subTextContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  subText: {
    fontSize: 12,
    fontWeight: "regular",
    color: COLORS.text
  },
  dot: {
    width: 15,
    height: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
});