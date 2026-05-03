import { COLORS } from '@/src/shared/constant/colors';
import { Ionicons, } from '@expo/vector-icons';
import React from 'react';
import { Image, ImageSourcePropType, Text, useWindowDimensions, View } from 'react-native';
import { style } from '../assets/styles/style';

export type OnboardingData = {
    id: number;
    title: string;
    description: string;
    image: ImageSourcePropType;
    imageHeight?: number;
    message?: {
        type: 'secure' | 'database';
        text: string;
    };
    form?: React.ReactNode;
}

export default function OnboardScreen({ data }: { data: OnboardingData }) {
    const { title, description, image, imageHeight, message, form } = data;
    const { width } = useWindowDimensions();
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#0E0E0D',
            position: 'relative'
        }}>

            {/* Hero Section */}
            <View style={style.heroContainer}>
                <Text style={style.heroTitle}>{title}</Text>
                <Text style={style.heroText}>{description}</Text>
            </View>

            <Image
                source={image}
                width={width}
                height={imageHeight ? imageHeight : width}
                style={[style.img, {
                    width: width,
                    height: imageHeight || width,
                    resizeMode: 'contain'
                }]}
            />

            {form && <View>{form}</View>}

            {/* message */}
            <View style={{
                paddingHorizontal: 34,
                position: 'absolute',
                bottom: 60
            }}>
                {message?.type === 'secure'
                    ? <View style={[style.message, { justifyContent: 'center' }]}>
                        <Ionicons name={'shield-checkmark'}
                            size={40}
                            color={COLORS.primary} />
                        <Text style={style.messageText}>{message?.text}</Text>
                    </View>
                    : <View style={[style.message, { justifyContent: 'space-between' }]}>
                        <Ionicons name={'document-attach'}
                            size={40}
                            color={COLORS.tertiary} />
                        <Text style={style.messageText}>{message?.text}</Text>
                        <Ionicons name="arrow-forward-circle" size={24} color={COLORS.tertiary} />
                    </View>
                }
            </View>
        </View>
    )
}
