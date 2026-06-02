import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';


type PaddingShorthand =
  | { paddingHorizontal?: number; paddingVertical?: number; padding?: never }
  | { paddingHorizontal?: never; paddingVertical?: never; padding?: number };

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  flex?: boolean;
  center?: boolean;
} & PaddingShorthand & Omit<ViewStyle, 'style'>;

export default function Section({ children, flex, center, style, paddingHorizontal = 22, paddingVertical, padding }: Props) {
  return (
    <View style={[
      flex && styles.flex,
      center && styles.center,
      style,
      { 
        paddingHorizontal: padding || paddingHorizontal, 
        paddingVertical: padding || paddingVertical 
      },
    ]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});