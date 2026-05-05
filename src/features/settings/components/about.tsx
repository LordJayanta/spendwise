import { COLORS } from '@/src/shared/constant/colors';
import { IoniconsName } from '@/src/shared/type/type';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { Href, router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Link = {
    text: string;
    iconName: IoniconsName;
    herf: Href
}

const Links: Link[] = [
    {
        text: 'Privacy Policy',
        iconName: 'shield-half',
        herf: 'https://github.com/LordJayanta/spendwise'
    },
    {
        text: 'Terms of Service',
        iconName: 'document-text-outline',
        herf: 'https://github.com/LordJayanta/spendwise'
    },
    {
        text: 'Github',
        iconName: 'logo-github',
        herf: 'https://github.com/LordJayanta/spendwise'
    }
]

// const appVersion = Constants.manifest?.version

export default function About() {
    const appVersion = Constants.expoConfig?.version || "0.0.0";

    return (
        <View style={styles.section}>
            <View style={styles.versionContainer}>
                <Text style={styles.text}>Version</Text>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>v{appVersion}</Text>
                </View>
            </View>


            <View style={styles.linkContainer}>
                {Links.map((item) => (
                    <TouchableOpacity key={item.text} style={styles.link} onPress={()=> router.push(item.herf)}>
                        <Ionicons name={item.iconName} size={20} color={COLORS.text} />
                        <Text style={styles.linkText}>{item.text}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    section: {
        padding: 24,
        paddingTop: 40,
        width: '100%',
        borderRadius: 16,
        backgroundColor: '#0E0E0E',
        gap: 24,
    },
    versionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: 'regular',
        color: COLORS.text,
    },
    badge:{
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 1000,
        backgroundColor: COLORS.surface,
        overflow: 'hidden',
    },
    badgeText: {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: 'regular',
        color: COLORS.text,
    },
    linkContainer: {
        gap: 16,
    },
    link: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        paddingVertical: 8,
    },
    linkText: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Inter',
        fontWeight: 'regular',
        color: COLORS.text,
    }
})