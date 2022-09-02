import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './BrandComponent.style';

const BrandComponent = ({ BrandComponent, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <LinearGradient
                colors={['#f3a683', '#f5cd79']}
                style={styles.cover}
            >
                <View style={styles.titlecontainer}>
                    <Text style={styles.title}>{BrandComponent.brand_name}</Text>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}
export default BrandComponent;