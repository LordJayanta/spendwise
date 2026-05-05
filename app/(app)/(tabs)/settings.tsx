import { commonStyles } from '@/assets/styles/common.style'
import { settingsStyles } from '@/assets/styles/settings.style'
import About from '@/src/features/settings/components/about'
import Preferences from '@/src/features/settings/components/preferences'
import Profile from '@/src/features/settings/components/profile'
import Security from '@/src/features/settings/components/security'
import Tab from '@/src/shared/components/tab'
import React from 'react'
import { ScrollView, View } from 'react-native'

export default function Settings() {
  return (
    <View style={[commonStyles.baseScreen, { position: 'relative' }]}>
      {/* Tab */}
      <View style={{ position: 'sticky', top: 0 }}>
        <Tab title='Settings' avater />
      </View>


      {/* Main */}
      <ScrollView style={{ flex: 1 }}>
        <View style={settingsStyles.container}>
          <Profile />

          <Preferences />

          <Security />

          <About />
        </View>
      </ScrollView>

    </View>
  )
}