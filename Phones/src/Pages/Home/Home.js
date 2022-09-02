import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Config from 'react-native-config';
import LinearGradient from 'react-native-linear-gradient';

import styles from './Home.style';
import fetchData from '../../Hook';
import BrandComponent from '../../Component/HomeComponent/BrandComponent';
import Loading from '../../Component/Loading';
import Error from '../../Component/Error';

const url = "https://api-mobilespecs.azharimm.site/v2/brands";

const Home = (props) => {
    const [brand_name, setBrand_Name] = useState('Acer');
    const [models, setModels] = useState(brand);

    const { brand, loading, error } = fetchData(url);

    useEffect(() => { onPressBrand(brand) }, [])

    const onPressBrand = (BrandComponent) => {
        console.log(BrandComponent.brand_name)
        if (brand_name === 'Acer') {
            setModels('acer-phones-59')
        } else {
            setModels(BrandComponent.brand_slug)
        }
        setBrand_Name(BrandComponent.brand_name)
    }

    const onSelect = (slug) => {
        return (
            props.navigation.navigate('Detail', { slug })
        );
    }


    const Mod = () => {
        const url = "https://api-mobilespecs.azharimm.site/v2/brands/";
        const { brand, loading, error } = fetchData(url + models);
        if (loading) {
            return <Loading />;
        };

        if (error) {
            return <Error />
        };



        return (
            <>
                <ScrollView contentContainerStyle={styles.container}>

                    {
                        brand.data.phones.map((com) => {
                            return (
                                <TouchableOpacity
                                    key={com.slug}
                                    onPress={() => onSelect(com.slug)}
                                >
                                    <LinearGradient
                                        colors={['#ff9800', '#ff5722']}
                                        style={styles.innercontainer}
                                    >
                                        <Image
                                            source={{ uri: com.image }}
                                            style={styles.image}
                                        />
                                        <Text style={styles.name} numberOfLines={2} ellipsizeMode='tail'>{com.phone_name}</Text>
                                        <Text style={styles.title}>{com.brand}</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            );
                        })
                    }
                </ScrollView>
            </>
        );
    }


    if (loading) {
        return <Loading />;
    };

    if (error) {
        return <Error />
    };

    return (
        <>
            <ScrollView horizontal={true} style={stylis.container}>
                {
                    brand.data.map((BrandComponent) => {
                        return (
                            <TouchableOpacity
                                onPress={() => onPressBrand(BrandComponent)}
                                style={stylis.container}
                                key={BrandComponent.brand_id}
                            >
                                <Text style={[stylis.btnNormal, brand_name === BrandComponent.brand_name && stylis.btnPress]}>
                                    {BrandComponent.brand_name}
                                </Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </ScrollView>
            <Mod />
        </>
    );
}

export default Home;

const stylis = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 30,
        marginHorizontal: 5,
    },
    innercontainer: {
        flexDirection: "row",


    },
    btnNormal: {
        color: '#494F4E',
        fontSize: 20,
        fontStyle: "normal",

        fontWeight: 'bold',
    },
    btnPress: {
        color: '#ff9800',
        fontSize: 20,
        fontStyle: "normal",

        fontWeight: 'bold',
    },

})