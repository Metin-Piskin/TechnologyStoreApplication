import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconn from 'react-native-vector-icons/MaterialIcons';
import Icoon from 'react-native-vector-icons/Entypo';

import styles from './Detail.style';

import fetchData from '../../Hook';
import Loading from '../../Component/Loading';
import Error from '../../Component/Error';
import AddButton from '../../Component/DetailComponent/AddButtonComponent';


const url = "https://api-mobilespecs.azharimm.site/v2/";

const Detail = (props) => {
    const [sayi, setSayi] = useState(1);
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
        <View style={{ justifyContent: 'space-between', flex: 1 }}>
            <TouchableOpacity onPress={back} style={styles.back}>
                <Backee size={40} />
            </TouchableOpacity>
            <ScrollView>
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

                </View>
                <Text style={styles.brandtext}>{brand.data.brand}</Text>
                <View style={styles.skillcontainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.skilltitle}>Dimension: </Text>
                        <Text>{brand.data.dimension}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.skilltitle}>Storage: </Text>
                        <Text>{brand.data.storage}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.skilltitle}>OS: </Text>
                        <Text>{brand.data.os}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.skilltitle}>Release Date: </Text>
                        <Text>{brand.data.release_date}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent:'center'  }}>
                        <Text style={styles.skilltitle}>{brand.data.specifications[6].title}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.skilltitle}>{brand.data.specifications[6].specs[1].key}: </Text>
                        <Text>{brand.data.specifications[6].specs[1].val}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.skilltitle}>{brand.data.specifications[6].specs[2].key}: </Text>
                        <Text style={{ flex: 1 }}>{brand.data.specifications[6].specs[2].val}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent:'center'  }}>
                        <Text style={styles.skilltitle}>{brand.data.specifications[7].title}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.skilltitle}>{brand.data.specifications[7].specs[1].key}: </Text>
                        <Text>{brand.data.specifications[7].specs[1].val}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.skilltitle}>{brand.data.specifications[7].specs[2].key}: </Text>
                        <Text style={{ flex: 1 }}>{brand.data.specifications[7].specs[2].val}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent:'center' }}>
                        <Text style={styles.skilltitle}>{brand.data.specifications[12].title}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.skilltitle}>{brand.data.specifications[12].specs[0].key}: </Text>
                        <Text>{brand.data.specifications[12].specs[0].val}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.skilltitle}>{brand.data.specifications[12].specs[4].key}: </Text>
                        <Text>{brand.data.specifications[12].specs[4].val}</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.addcontainer}>
                <View style={styles.addnumcontainer}>
                    <TouchableOpacity onPress={() => setSayi(sayi - 1)}>
                        <Icoon name="minus" size={23} color={"#000"} />
                    </TouchableOpacity>
                    <Text style={styles.addnumtext}>{sayi}</Text>
                    <TouchableOpacity onPress={() => setSayi(sayi + 1)}>
                        <Icoon name="plus" size={23} color={"#000"} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.sharecontainer}>
                    <Share size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.favoricontainer}>
                    <Heart fill='#000' size={20} />
                </TouchableOpacity>
                <AddButton title='Add to Cart' onPress={null} />
            </View>
        </View>
    );
}

export default Detail;

function Heart({ size, fill, ...props }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path d="M11.4995 21.2609C11.1062 21.2609 10.7307 21.1362 10.4133 20.9001C8.2588 19.3012 3.10938 15.3239 1.81755 12.9143C0.127895 9.76543 1.14258 5.72131 4.07489 3.89968C5.02253 3.31177 6.09533 3 7.18601 3C8.81755 3 10.3508 3.66808 11.4995 4.85726C12.6483 3.66808 14.1815 3 15.8131 3C16.9038 3 17.9766 3.31177 18.9242 3.89968C21.8565 5.72131 22.8712 9.76543 21.186 12.9143C19.8942 15.3239 14.7448 19.3012 12.5902 20.9001C12.2684 21.1362 11.8929 21.2609 11.4995 21.2609ZM7.18601 4.33616C6.34565 4.33616 5.5187 4.57667 4.78562 5.03096C2.43888 6.49183 1.63428 9.74316 2.99763 12.2819C4.19558 14.5177 9.58639 18.6242 11.209 19.8267C11.3789 19.9514 11.6158 19.9514 11.7856 19.8267C13.4082 18.6197 18.799 14.5133 19.997 12.2819C21.3603 9.74316 20.5557 6.48738 18.209 5.03096C17.4804 4.57667 16.6534 4.33616 15.8131 4.33616C14.3425 4.33616 12.9657 5.04878 12.0359 6.28696L11.4995 7.00848L10.9631 6.28696C10.0334 5.04878 8.6611 4.33616 7.18601 4.33616Z" fill={fill} stroke={fill} strokeWidth="0.6" />
        </Svg>
    )
}

function Kalp({ size, fill, ...props }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 24 22" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path fillRule="evenodd" clipRule="evenodd" d="M16.4537 1.25C20.2694 1.25 22.8333 4.88188 22.8333 8.27C22.8333 15.1316 12.1926 20.75 12 20.75C11.8074 20.75 1.16666 15.1316 1.16666 8.27C1.16666 4.88188 3.73055 1.25 7.54629 1.25C9.73703 1.25 11.1694 2.35906 12 3.33406C12.8305 2.35906 14.263 1.25 16.4537 1.25Z" fill={fill} stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

function Share({ size, ...props }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path d="M11.3066 4.11334C12.64 5.04001 13.56 6.51334 13.7466 8.21334" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M2.32666 8.24667C2.49999 6.55333 3.40666 5.08 4.72666 4.14667" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M5.45996 13.96C6.23329 14.3533 7.11329 14.5733 8.03996 14.5733C8.93329 14.5733 9.77329 14.3733 10.5266 14.0067" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M8.03998 5.13333C9.06355 5.13333 9.89331 4.30357 9.89331 3.28C9.89331 2.25643 9.06355 1.42667 8.03998 1.42667C7.01641 1.42667 6.18665 2.25643 6.18665 3.28C6.18665 4.30357 7.01641 5.13333 8.03998 5.13333Z" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M3.22003 13.28C4.2436 13.28 5.07337 12.4502 5.07337 11.4267C5.07337 10.4031 4.2436 9.57333 3.22003 9.57333C2.19646 9.57333 1.3667 10.4031 1.3667 11.4267C1.3667 12.4502 2.19646 13.28 3.22003 13.28Z" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M12.78 13.28C13.8035 13.28 14.6333 12.4502 14.6333 11.4267C14.6333 10.4031 13.8035 9.57333 12.78 9.57333C11.7564 9.57333 10.9266 10.4031 10.9266 11.4267C10.9266 12.4502 11.7564 13.28 12.78 13.28Z" stroke="#101010" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

function Backee({ size, ...props }) {
    return (
        <Svg width={size} height={size} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" {...props}>
            <Path d="M17 27C22.5228 27 27 22.5228 27 17C27 11.4772 22.5228 7 17 7C11.4772 7 7 11.4772 7 17C7 22.5228 11.4772 27 17 27Z" stroke="#101010" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M18.26 20.53L14.74 17L18.26 13.47" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}