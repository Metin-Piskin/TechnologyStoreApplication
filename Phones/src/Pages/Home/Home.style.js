import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "center",
        backgroundColor: '#fff',
    },
    innercontainer: {

        borderRadius: 5,
        marginHorizontal: 5,
        marginVertical: 10,
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
        color: '#fff',
        fontWeight: "bold",
    },
    title: {
        color: '#fff',
        fontWeight: "bold",
    },
})