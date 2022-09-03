import React from "react";
import LottieView from 'lottie-react-native';

function Error() {
    return <LottieView
        source={require("./98642-error-404.json")}
        autoPlay
        style={{ zIndex: 1, flex: 1 }}
    />;
}

export default Error;