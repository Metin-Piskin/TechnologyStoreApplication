import React from 'react'
import { View, Text, FlatList } from 'react-native';

import fetchData from '../../Hook';
import Loading from '../../Component/Loading';
import Error from '../../Component/Error';

const url = "https://api-mobilespecs.azharimm.site/v2/brands/";

const Models = (props) => {
    const { brand_slug } = props.route.params;
    const { brand, loading, error } = fetchData(url + brand_slug);

    if (loading) {
        return <Loading />;
    };

    if (error) {
        return (
            <Error />
        );
    }

    return (
        <View>
            <Text>{brand_slug}</Text>
        </View>
    )
}

export default Models;