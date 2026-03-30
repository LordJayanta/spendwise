import { COLORS } from "@/src/constant/colors";
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from "expo-router";


export default function AddButton() {
    return (
        <TouchableOpacity onPress={() => router.push("/create")}>
            <LinearGradient
                style={styles.container}
                colors={['#0BAE5D', '#3CD67B']}
            >
                <MaterialIcons name="add" size={25} color={COLORS.light} />
            </LinearGradient>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 57,
        width: 57,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 1000,
        backgroundColor: COLORS.light,
    },
});