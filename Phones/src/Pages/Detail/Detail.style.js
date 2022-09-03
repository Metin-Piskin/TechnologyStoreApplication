import { StyleSheet } from "react-native";

export default StyleSheet.create({
    back: {
        zIndex: 1,
        position: "absolute",
        top: 20,
        left: 10
    },
    thumbnailimagecontainer: {
        alignItems: "center",
        marginVertical: 15,
    },
    thumbnailimage: {
        width: 270,
        height: 270,
        resizeMode: 'contain',
    },
    imagecontainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10
    },
    imagees: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        marginLeft: 10,
    },
    sscontainer: {
        justifyContent: "space-between",
        flexDirection: "row",
    },
    starcontainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
    },
    star: {
        marginLeft: 7
    },
    startext: {
        marginLeft: 10
    },
    reviewscontainer: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15,
    },
    reviewstext: {},
    phonenamecontainer: {
        flexDirection:"row",
        justifyContent:"space-between"
    },
    phonenametext: {
        fontWeight:"bold",
        fontSize:30,
        color:'#000',
        marginLeft:10
    },
    money: {
        fontWeight:"bold",
        fontSize:18,
        color:'#000',
        marginRight:20,
        marginTop:10
    },
    brandtext:{
        fontSize:20,
        marginLeft:10,
    },
    addcontainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:10
    }
});