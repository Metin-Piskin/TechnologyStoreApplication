import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
    },
    innercontainer: {
        borderRadius: 10,
        marginHorizontal: 5,
        marginVertical: 5,
        backgroundColor: '#FFFFFF',
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 100,
        height: 150,
        resizeMode: "stretch",
        marginHorizontal: 5,
        marginVertical: 5,
        borderRadius: 10
    },
    name: {
        color: '#000',
        fontWeight: "bold",
        marginHorizontal: 5,
        marginVertical: 5,
    },
    title: {
        color: '#000',
        fontWeight: "bold",
        marginHorizontal: 5,
        marginVertical: 5,
    },
    profileimagecontainer: {
        zIndex: 1,
        position: "absolute",
        backgroundColor: '#fff',
        borderRadius: 27,
        padding: 2,
        top: 30,
        right: 20
    },
    profileimage: {
        width: 50,
        height: 50,
        resizeMode: "contain",
        borderRadius: 50
    },
    headerimagecontainer: {
        zIndex: 1,
        position: "absolute",
        left: 120,
        right: 75,
        top: 75,
        bottom: 75
    },
    headerimage: {
        width: 155,
        height: 164,
        resizeMode: "contain"
    },
    bellcontainer: {
        zIndex: 1,
        position: "absolute",
        top: 45,
        right: 85
    },
    barscontainer: {
        zIndex: 1,
        position: "absolute",
        top: 37,
        left: 20
    },
    textcontainer: {
        zIndex: 1,
        position: "absolute",
        top: 250,
        left: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    textbir: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 19,
    },
    textiki: {
        color: '#FFC857',
        fontWeight: "bold",
        fontSize: 14,
    },
})