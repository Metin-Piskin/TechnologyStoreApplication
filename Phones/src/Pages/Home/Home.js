import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import Icoon from 'react-native-vector-icons/Octicons';

import styles from './Home.style';
import fetchData from '../../Hook';
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

    const onSelect = slug => {
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
                <ScrollView horizontal={true} style={styles.container} >
                    {
                        brand.data.phones.map((com) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => onSelect(com.slug)}
                                    key={com.slug}
                                    style={styles.innercontainer}
                                >
                                    <Image
                                        source={{ uri: com.image }}
                                        style={styles.image}
                                    />
                                    <Text style={styles.name} numberOfLines={2} ellipsizeMode='tail'>{com.phone_name}</Text>
                                    <Text style={styles.title}>{com.brand}</Text>
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
            <ScrollView style={{ flex: 1 }}>
                <>
                    <Image
                        source={require('../../Assets/Rectangle.png')}
                        style={{ width: 393, height: 339, resizeMode: 'contain' }}
                    />
                    <View style={styles.profileimagecontainer}>
                        <Image
                            source={{ uri: 'https://avatars.githubusercontent.com/u/85956297?v=4' }}
                            style={styles.profileimage}
                        />
                    </View>
                    <View style={styles.headerimagecontainer}>
                        <Image
                            source={require('../../Assets/BannerImage.png')}
                            style={styles.headerimage}
                        />
                    </View>
                    <View style={styles.bellcontainer}>
                        <Icon name="bell" size={24} color={"#FFFFFF"} />
                    </View>
                    <View style={styles.barscontainer}>
                        <Icoon name="three-bars" size={24} color={"#FFFFFF"} />
                    </View>
                    <View style={styles.textcontainer}>
                        <Text style={styles.textbir}>The best just got better</Text>
                        <Text style={styles.textiki}>İPhone 13 series</Text>
                    </View>
                </>
                <>
                    <ScrollView horizontal={true} contentContainerStyle={stylis.container}>
                        {
                            brand.data.map((BrandComponent) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => onPressBrand(BrandComponent)}
                                        key={BrandComponent.brand_id}
                                        style={[stylis.normal, brand_name === BrandComponent.brand_name && stylis.press]}
                                    >
                                        <Text style={[stylis.btnNormal, brand_name === BrandComponent.brand_name && stylis.btnPress]}>
                                            {BrandComponent.brand_name}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </ScrollView>
                </>
                <Mod />
            </ScrollView >
        </>
    );
}

export default Home;

const stylis = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
    },
    normal: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 10,
        marginVertical: 10,
        justifyContent: 'center',
        borderRadius: 12,
        paddingHorizontal: 50,
        paddingVertical: 5,
    },
    press: {
        backgroundColor: '#000',
        marginHorizontal: 10,
        marginTop: 10,
        justifyContent: 'center',
        borderRadius: 12,
        paddingHorizontal: 50,
        paddingVertical: 5,
    },
    btnNormal: {
        color: '#000',
        fontSize: 18,
        fontStyle: "normal",
    },
    btnPress: {
        color: '#FFFFFF',
        fontSize: 20,
        fontStyle: "normal",
    },

})