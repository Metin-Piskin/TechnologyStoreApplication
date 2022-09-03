import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconn from 'react-native-vector-icons/FontAwesome5';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Home from "./Pages/Home";
import Favorite from "./Pages/Favorite";
import ShoppingBasket from './Pages/ShoppingBasket';
import Detail from './Pages/Detail';

function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#fff'
                }
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Icon name="md-home" size={30} color={"#ff9800"} />
                        }
                        return <Icon name="md-home" size={30} color={"#494F4E"} />
                    }
                }}
            />
            <Tab.Screen
                name="FavoriteScreen"
                component={Favorite}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Icon name="md-heart" size={30} color={"#ff9800"} />
                        }
                        return <Icon name="md-heart" size={30} color={"#494F4E"} />
                    }
                }}
            />
            <Tab.Screen
                name="ShoppingBasketScreen"
                component={ShoppingBasket}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Iconn name="shopping-basket" size={30} color={"#ff9800"} />
                        }
                        return <Iconn name="shopping-basket" size={30} color={"#494F4E"} />
                    }
                }}
            />
        </Tab.Navigator>
    );
}

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
                <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer >
    )
}
export default Router;