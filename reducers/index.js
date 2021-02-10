import { combineReducers } from "redux";
import songData from '../HitParadeData';
 

export function songs(songs=[], action) {
    switch (action.type) {
        case "SET_SONGS":
            return songData
        default:
           return songs
    }
}

export function cartItems(cartItems=[], action) {
    switch (action.type) {
        case "value":
             
        default:
            return cartItems
    }
}

export function styles(styles=[], action) {
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