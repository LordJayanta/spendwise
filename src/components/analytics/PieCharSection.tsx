import { analyticsStyles } from '@/assets/styles/analytics.stylel';
import { CATEGORIES, CATEGORIES_ICONS, CategoryKey } from '@/src/constant/Category';
import { COLORS } from '@/src/constant/colors';
import { useTransactionStore } from '@/src/store/useTransactionStore';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { PieChart, pieDataItem } from 'react-native-gifted-charts';

export const PieCharSection = () => {
    const { summary, transactions } = useTransactionStore();
    const [pieData, setPieData] = useState<pieDataItem[]>([]);

    const generateChartData = () => {
        // Filter Expenses
        const expense = transactions.filter(item => item.amount < 0);

        // Group and sum by category
        const grouped = expense.reduce((acc: Record<string, pieDataItem>, trnx) => {
            const amount = Math.abs(trnx.amount);
            const color = CATEGORIES.filter(t => t.name === trnx.category)[0].color

            // if Category is present update value
            if (acc[trnx.category]) {
                acc[trnx.category].value += amount;
            }
            // if Category dos't exist create new one
            else {
                acc[trnx.category] = {
                    value: amount,
                    text: trnx.category,
                    color: color
                }
            }

            return acc;
        }, {})

        return Object.values(grouped);
    }

    useEffect(() => {
        // loadPieData()
        const data = generateChartData()
        setPieData(data)
    }, [])
    return (

        <View style={analyticsStyles.ChartContainer}>
            <View style={analyticsStyles.ChartHeaderContainer}>
                <Text style={analyticsStyles.ChartHeaderTitle}>Category Brackdown</Text>
                <Text style={analyticsStyles.ChartHeaderText}>Total : ${summary.expense}</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: 20 }}>
                <PieChart
                    donut
                    radius={80}
                    innerRadius={65}
                    data={pieData}
                    backgroundColor={COLORS.surface}
                    centerLabelComponent={() => {
                        return (
                            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 22, color: COLORS.primary, fontWeight: 'bold' }}>Total</Text>
                                <Text style={{ fontSize: 18, color: COLORS.primary }}>Expense</Text>
                            </View>
                        );
                    }}
                />
            </View>

            <View style={{ marginBottom: 16 }}>
                {pieData.map((item, index) => (
                    <View
                        style={{ width: '70%', marginHorizontal: 'auto', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}
                        key={index}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                            <Ionicons name={CATEGORIES_ICONS[item.text as CategoryKey]} color={item.color} size={16} />
                            <Text style={{ color: COLORS.text }}>{item.text}</Text>
                        </View>
                        <Text style={{ color: COLORS.text }}>{item.value}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}
