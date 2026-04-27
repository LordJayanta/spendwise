import { analyticsStyles } from '@/assets/styles/analytics.stylel'
import { commonStyles } from '@/assets/styles/common.style'
import { COLORS } from '@/src/constant/colors'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { BarChart, PieChart, type barDataItem, type pieDataItem } from 'react-native-gifted-charts'

const Analytics = () => {
  const barData: barDataItem[] = [
    { value: 1500, label: 'JAN', },
    { value: 500, label: 'FEB', frontColor: COLORS.primary },
    { value: 745, label: 'MAR', frontColor: COLORS.primary },
    { value: 1320, label: 'APR', },
    { value: 1600, label: 'MAY', frontColor: COLORS.primary },
    { value: 2256, label: 'JUN', },
  ];
  const pieData: pieDataItem[] = [
    { value: 1800, color: '#2EF381', text: 'Housing' }, // Housing
    { value: 640, color: '#63B3ED', text: 'Dining' },  // Dining
    { value: 920, color: '#F6ADAD', text: 'Travel' },  // Travel
    { value: 450, color: '#4A5568', text: 'Health' },  // Health
    { value: 430, color: '#2D3748', text: 'Shopping' },  // Shopping
  ];

  return (
    <View style={[commonStyles.baseScreen]}>
      {/* Header Tab*/}
      <View style={analyticsStyles.TabContainer}>
        <View style={analyticsStyles.TabLeftContainer}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" color={COLORS.text} size={20} />
          </TouchableOpacity>
          <Text style={analyticsStyles.TabText}>Analytics</Text>
        </View>
      </View>


      <ScrollView style={{ flex: 1 }}>


        {/* CurrentBalance */}
        <View style={analyticsStyles.Section}>
          <Text style={analyticsStyles.CurrentBalanceHeaderText}>Current Balance</Text>

          <View style={analyticsStyles.CurrentBalanceAmountWrrapper}>
            <Text style={analyticsStyles.CurrentBalanceAmount}>
              $12390.93
            </Text>
            <View style={analyticsStyles.CurrentBalancePercentageContainer}>
              <Ionicons name="analytics" size={20} color={COLORS.primary} />
              <Text style={analyticsStyles.CurrentBalancePercentageText}>10.3 %</Text>
            </View>
          </View>
        </View>

        {/* Income Chart */}
        <View style={{ marginTop: 16, paddingHorizontal: 20 }}>
          <View style={analyticsStyles.ChartContainer}>
            <View style={analyticsStyles.PieChartHeaderContainer}>
              <Text style={analyticsStyles.PieChartHeaderTitle}>Cash Flow</Text>
              <Text style={analyticsStyles.PieChartHeaderText}>Total : $1290</Text>
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
        </View>

        <View style={{ marginVertical: 24, paddingHorizontal: 20 }}>
          <View style={analyticsStyles.ChartContainer}>
            <View style={analyticsStyles.PieChartHeaderContainer}>
              <Text style={analyticsStyles.PieChartHeaderTitle}>Category Brackdown</Text>
              <Text style={analyticsStyles.PieChartHeaderText}>Total : $1290</Text>
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
                    <Ionicons name="ellipse" color={item.color} size={10} />
                    <Text style={{ color: COLORS.text }}>{item.text}</Text>
                  </View>
                  <Text style={{ color: COLORS.text }}>{item.value}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>


      </ScrollView>
    </View>
  )
}

export default Analytics