import Button from '@/src/shared/components/button'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Container from './container'

export default function DataSection() {
  return (
    <Container iconName={'cloud-download-outline'} title='Data'>
      <View style={styles.container}>
        <Button
          text='Export Data'
          variant='natural'
          onPress={() => console.log('export data')}
        />
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 16,
    overflow: 'hidden',
  }
})