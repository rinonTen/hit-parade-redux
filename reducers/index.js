import { combineReducers } from "redux";
import { songs } from './songsReducers';
import { cartItems } from './cartItemsReducers';
import { newSong } from './newSongReducers';

export default combineReducers({
    songs,
    cartItems, 
    newSong
})