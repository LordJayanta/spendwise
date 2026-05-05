import { COLORS } from '@/src/shared/constant/colors';
import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { checkBiometricAuth } from '../../biometric-auth/utils';
import { useSettingStore } from '../store/useSettingStore';
import Container from './container';


type SecurityItem = {
    title: string;
    description: string;
    action: () => void;
}

export default function Security() {
    const { isEnableBiometricAuth , enableBiometricAuth, disableBiometricAuth } = useSettingStore();
    // const [isEnabled, setIsEnabled] = React.useState(false);
    // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleBiometricAuth = () => {
        return isEnableBiometricAuth ? disableBiometricAuth() : enableBiometricAuth();
    };

    const securityItems: SecurityItem[] = [
        {
            title: 'Biometric Unlock',
            description: 'Enable biometric unlock Use FaceID or Fingerprint to unlock the app.',
            action: checkBiometricAuth,
        }
    ]


    
    return (
        <Container iconName='options-outline' title='Security'>

            {securityItems.map((item, index) => (
                <View key={index} style={[styles.container, index > 0 && {
                    borderTopWidth: 1,
                    borderTopColor: '#252525'
                }]}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.text}>{item.description}</Text>
                    </View>
                    <View>
                        <Switch
                            value={isEnableBiometricAuth}
                            onValueChange={toggleBiometricAuth}
                            thumbColor={COLORS.light}
                            trackColor={{ false: COLORS.gray, true: COLORS.primary }}
                        />
                    </View>
                </View>
            ))}

        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden'
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        gap: 2,
        justifyContent: 'center',
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Inter',
        color: COLORS.text,
    },
    text: {
        fontWeight: "regular",
        fontSize: 12,
        lineHeight: 16,
        fontFamily: 'Inter',
        color: COLORS.text
    }
})