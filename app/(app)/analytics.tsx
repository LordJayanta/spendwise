import { commonStyles } from '@/assets/styles/common.style'
import { COLORS } from '@/src/constant/colors'
import React from 'react'
import { Text, View } from 'react-native'

const Analytics = () => {
  return (
    <View style={[commonStyles.baseScreen, {alignItems: 'center', justifyContent: 'center'}]}>
      <Text style={{color: COLORS.text}}>Analytics Page is underworking...</Text>
    </View>
  )
}

export default Analytics