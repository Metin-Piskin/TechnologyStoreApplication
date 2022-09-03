import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from './AddButtonComponent.style';

const AddButtonComponent = ({ onPress, title }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}
export default AddButtonComponent;