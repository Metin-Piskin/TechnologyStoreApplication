import { useState, useEffect } from "react";
import { Alert } from "react-native";
export default function (state, action) {
    switch (action.type) {
        case "ADD_FAVORITE":
            const { slug } = action.payload;
            const newList = [...state.FavouritesList, slug];
            return { ...state, FavouritesList: newList };

        default:
            return state;
    }
}