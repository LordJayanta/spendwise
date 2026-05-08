import React from 'react'
import { StyleSheet, View } from 'react-native'
import ExportButton from '../../export-data/components/export-button'
import DeleteAllTransactions from '../../transactions/components/delete-all-transactions'
import Container from './container'

export default function DataSection() {
  return (
    <Container iconName={'cloud-download-outline'} title='Data'>
      <View style={styles.container}>
        <ExportButton />
        <DeleteAllTransactions />
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