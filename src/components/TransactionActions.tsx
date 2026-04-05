import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import React from 'react'
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../constant/colors'
import { useSqlite } from '../db/useSqlite'

type Props = {
    data?: any,
    onClose: () => void,
    isOpen: boolean
}
export default function TransactionActions({ data, onClose, isOpen }: Props) {
    const { deleteTransactionById } = useSqlite();
    return (
        <View>
            <Modal animationType='slide' visible={isOpen} transparent >
                <TouchableOpacity style={{ flex: 1, height: '85%' }} onPress={onClose} />
                <View style={styles.container}>
                    <LinearGradient
                    colors={['transparent', '#000000']}
                    style={styles.actionContainer}>
                        <TouchableOpacity 
                        onPress={async () => {
                            onClose()
                            router.push({
                                pathname: '/create',
                                params: {
                                    id: JSON.stringify(data?.id)
                                },
                            })
                        }} 
                        activeOpacity={0.3} 
                        style={[styles.iconContainer, { backgroundColor: COLORS.gray, width: 56, height: 56  }]}
                        >
                            <Ionicons name="pencil-sharp" color={COLORS.tertiary} size={18}/>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={async () => {
                            await deleteTransactionById(data?.id);
                            onClose()
                        }} 
                        activeOpacity={0.3} 
                        style={[styles.iconContainer, { backgroundColor: COLORS.gray, width: 56, height: 56  }]}
                        >
                            <Ionicons name="trash" color={COLORS.secondary} size={18}/>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '15%',
        // backgroundColor: COLORS.gray,
        position: 'absolute',
        bottom: 0
    },
    actionContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24
    },
    iconContainer: {
        width: 42,
        height: 42,
        borderRadius: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
})