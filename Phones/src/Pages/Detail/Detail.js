import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconn from 'react-native-vector-icons/MaterialIcons';

import styles from './Detail.style';

import fetchData from '../../Hook';
import Loading from '../../Component/Loading';
import Error from '../../Component/Error';
import AddButton from '../../Component/DetailComponent/AddButtonComponent';


const url = "https://api-mobilespecs.azharimm.site/v2/";

const Detail = (props) => {
    const { slug } = props.route.params;
    const { brand, loading, error } = fetchData("https://api-mobilespecs.azharimm.site/v2/" + slug);

    if (loading) {
        return <Loading />;
    };

    if (error) {
        return <Error />
    };

    const back = () => {
        props.navigation.goBack();
    }


    return (
        <View>
            <TouchableOpacity onPress={back} style={styles.back}>
                <Icon name="chevron-back-circle-outline" size={30} color={"#000"} />
            </TouchableOpacity>
            <View style={styles.thumbnailimagecontainer}>
                <Image source={{ uri: brand.data.thumbnail }} style={styles.thumbnailimage} />
            </View>
            <View style={styles.imagecontainer}>
                <TouchableOpacity>
                    <Image source={{ uri: brand.data.phone_images[0] }} style={styles.imagees} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={{ uri: brand.data.phone_images[1] }} style={styles.imagees} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={{ uri: brand.data.phone_images[3] }} style={styles.imagees} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={{ uri: brand.data.phone_images[4] }} style={styles.imagees} />
                </TouchableOpacity>
            </View>
            <View style={styles.sscontainer}>
                <View style={styles.starcontainer}>
                    <Icon name="ios-star" size={15} color={"#FFC857"} style={styles.star} />
                    <Icon name="ios-star" size={15} color={"#FFC857"} style={styles.star} />
                    <Icon name="ios-star" size={15} color={"#FFC857"} style={styles.star} />
                    <Icon name="ios-star" size={15} color={"#FFC857"} style={styles.star} />
                    <Icon name="ios-star" size={15} color={"#FFC857"} style={styles.star} />
                    <Text style={styles.startext}>(4.9)</Text>
                </View>
                <TouchableOpacity style={styles.reviewscontainer}>
                    <Text style={styles.reviewstext}>123 Reviews</Text>
                    <Iconn name="navigate-next" size={27} color={"#000"} />
                </TouchableOpacity>
            </View>
            <View style={styles.phonenamecontainer}>
                <Text style={styles.phonenametext}>{brand.data.phone_name}</Text>
                <Text style={styles.money}>$600</Text>
            </View>
            <Text style={styles.brandtext}>{brand.data.brand}</Text>
            <Text>{brand.data.dimension}</Text>
            <Text>{brand.data.storage}</Text>
            <View style={styles.addcontainer}>
            <Text>Bir</Text>
            <Text>iki</Text>
            <Text>üç</Text>
            <AddButton title='Add to Cart' onPress={null} />
            </View>
        </View>
    );
}

export default Detail;