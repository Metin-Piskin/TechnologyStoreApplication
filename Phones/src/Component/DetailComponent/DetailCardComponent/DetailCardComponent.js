import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native';

import styles from './DetailCardComponent.style';

const DetailCardComponent = ({ title }) => {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    );
}

export default DetailCardComponent;