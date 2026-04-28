import { analyticsStyles } from '@/assets/styles/analytics.stylel';
import { COLORS } from '@/src/shared/constant/colors';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { BarChart, barDataItem } from 'react-native-gifted-charts';
import { sqlite } from '../db/useSqlite';
import { useAnalytics } from '../hooks/useAnalytics';

export const BarChartSection = () => {
    const { summary } = useAnalytics();
    const [barData, setBarData] = useState<barDataItem[]>([]);

    const loadMonthlyData = async () => {
        const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        const data = await sqlite.getIncomeData();
        if (!data) return;

        const finalData = data.map((item) => ({ value: item.totalIncome, label: months[Number(item.month.charAt(6))] }))
        setBarData(finalData);
    }


    useEffect(() => { loadMonthlyData() }, [])

    return (

        <View style={analyticsStyles.ChartContainer}>
            <View style={analyticsStyles.ChartHeaderContainer}>
                <Text style={analyticsStyles.ChartHeaderTitle}>Cash Flow</Text>
                <Text style={analyticsStyles.ChartHeaderText}>Total : ${summary.income}</Text>
            </View>
            <BarChart
                data={barData}
                barWidth={35}
                spacing={20}
                hideRules
                hideYAxisText
                yAxisThickness={0}
                xAxisThickness={0}
                noOfSections={3}
                barBorderRadius={12}
                frontColor={COLORS.light}
                xAxisLabelTextStyle={{ color: COLORS.text, fontSize: 10 }}
                yAxisTextStyle={{ color: COLORS.text }}
            />
        </View>
    )
}
