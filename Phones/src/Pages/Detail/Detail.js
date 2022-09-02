import React from 'react'
import { View, Text } from 'react-native';

import fetchData from '../../Hook';

const url = "https://api-mobilespecs.azharimm.site/v2/";

const Detail = (props) => {
    const { slug } = props.route.params;
    const { brand, loading, error } = fetchData(url + slug);

    const D = brand.data;

    return (
        <View>
            <Text>{slug}</Text>
        </View>
    );
}

export default Detail;