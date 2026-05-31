import { analyticsStyles } from '@/assets/styles/analytics.stylel'
import { commonStyles } from '@/assets/styles/common.style'
import { BarChartSection } from '@/src/features/analytics/components/BarChartSection'
import { PieCharSection } from '@/src/features/analytics/components/PieCharSection'
import { useTransactionStore } from '@/src/features/transactions/store/useTransactionStore'
import Tab from '@/src/shared/components/tab'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'

const Analytics = () => {
  const { summary } = useTransactionStore();

  return (
    <View style={[commonStyles.baseScreen]}>
      {/* Header Tab*/}
      <Tab title='Analytics' avater />


      <ScrollView style={{ flex: 1 }}>
        
        {/* CurrentBalance */}
        <View style={analyticsStyles.Section}>
          <Text style={analyticsStyles.CurrentBalanceHeaderText}>Current Balance</Text>

          <View style={analyticsStyles.CurrentBalanceAmountWrrapper}>
            <Text style={analyticsStyles.CurrentBalanceAmount}>
              ${summary.balance}
            </Text>
            {/* <View style={analyticsStyles.CurrentBalancePercentageContainer}>
              <Ionicons name="analytics" size={20} color={COLORS.primary} />
              <Text style={analyticsStyles.CurrentBalancePercentageText}>10.3 %</Text>
            </View> */}
          </View>
        </View>

        {/* Expense Chart */}
        <View style={{ marginTop: 16, paddingHorizontal: 20 }}>
          <PieCharSection />
        </View>

        {/* Income Chart */}
        <View style={{ marginVertical: 24, paddingHorizontal: 20 }}>
          <BarChartSection />
        </View>

      </ScrollView>
    </View>
  )
}

export default Analytics