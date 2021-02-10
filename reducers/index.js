import { combineReducers } from "redux";
import songData from '../HitParadeData';


export function songs(songs = [], action) {
    switch (action.type) {
        case "SET_SONGS":
            return songData;
        case "ADD_SONG": 
            return [...songs, action.payload]
        default:
            return songs
    }
}

export function cartItems(cartItems = [], action) {
    switch (action.type) {
        case "SET_CART_ITEMS":
            return [...cartItems, action.payload];
        default:
            return cartItems
    }
}

export function styles(styles = [], action) {
    switch (action.type) {
        case "value":

        default:
            return styles;
    }
}

export default combineReducers({
    songs,
    cartItems,
    styles
})