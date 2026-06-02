import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useThemeStore } from '../../theme/store/useThemeStore';

type Props = {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    bgColor?: string;
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
} & Omit<ViewStyle, 'style'>;



export default function Container({ 
    children, 
    style,
    bgColor, 
    borderColor, 
    borderWidth=1, 
    borderRadius=14
}: Props) {
    const { COLORS } = useThemeStore();

    return (
        <View style={[
            {
                backgroundColor: bgColor || COLORS.surface.lv1,
                borderColor: borderColor || COLORS.border.subtle,
                borderWidth,
                borderRadius,
            },
            style
        ]}>
            {children}
        </View>
    )
}
