import Button from '@/src/shared/components/button';
import * as Sharing from 'expo-sharing';
import React from 'react';
import { Alert } from 'react-native';
import { useTransactionStore } from '../../transactions/store/useTransactionStore';
import { createCSVFile } from '../utils/create-csv-file';

export default function ExportButton() {

    const { transactions } = useTransactionStore();

    
    const exportData = async () => {
        
        if (transactions.length === 0) {
            Alert.alert('Ops!', 'You have No data to export. Please add some transactions first.');
            return;
        }

        try {
            const fileUri: string | undefined = createCSVFile(transactions);

            // Check if sharing is available on the device
            if (await Sharing.isAvailableAsync() && fileUri) {
                await Sharing.shareAsync(fileUri);
            }
        } catch (error) {
            console.log("ExportData: ", error);
        }
    }

    return (
        <Button
            text='Export Data as *CSV'
            variant='natural'
            onPress={() => exportData()}
        />
    )
}