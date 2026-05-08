import Button from '@/src/shared/components/button';
import React from 'react';
import { Alert } from 'react-native';
import { useTransactionStore } from '../store/useTransactionStore';

export default function DeleteAllTransactions() {
    const { deleteAllTransactions, transactions } = useTransactionStore();

    return (
        <Button
            text='Delete All Data'
            variant='destructive'
            iconName='trash-outline'
            onPress={() => {
                if (transactions.length === 0) {
                    Alert.alert('Ops!', 'You have No data to delete. Please add some transactions first.');
                    return;
                }

                Alert.alert(
                    "Warning! Delete All Data",
                    "Are you sure you want to delete all transactions ? You can't undo this action.",
                    [
                        { text: "Cancel", style: "default" },
                        { text: "Delete", style: "destructive", onPress: () => deleteAllTransactions() },
                    ]
                )
            }}
        />
    )
}