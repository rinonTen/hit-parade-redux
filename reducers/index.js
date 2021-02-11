import { combineReducers } from "redux";
 
export function songs(songs = [], action) {
    switch (action.type) {
        case "GET_SONGS":
            return action.payload
        case "STORE_SONGS":
            return songs
        case "ADD_SONG":
            return [...songs, action.payload]
        case "TOGGLE_FAVORITE":
            return songs.map(song => {
                if (song.id === action.payload) {
                    return {
                        ...song,
                        isFavorited: !song.isFavorited,
                    };
                }
                return { ...song }
            })
        case "INCREMENT_UPVOTES":
            return songs.map(song => {
                if (song.id === action.payload) {
                    return {
                        ...song,
                        upvotes: song.upvotes + 1,
                    };
                }
                return { ...song };
            });
        case "INCREMENT_DOWNVOTES":
            return songs.map(song => {
                if (song.id === action.payload) {
                    return {
                        ...song,
                        downvotes: song.downvotes + 1,
                    };
                }
                return { ...song };
            });
        case "TOGGLE_CART":
            return songs.map(song => {
                if (song.id === action.payload) {
                    return {
                        ...song,
                        alreadyBought: !song.alreadyBought,
                    };
                }
                return { ...song };
            });
        default:
            return songs
    }
}

export function cartItems(cartItems = [], action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return [...cartItems, action.payload]
        case "REMOVE_FROM_CART":
            return cartItems.filter(item => item.id !== action.payload)
        case "EMPTY_CART":
            return []
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

export function newSong(newSong = {}, action) {
    switch (action.type) {
        case "SET_TITLE":
            return {...newSong, title: action.payload}
        case "SET_ARTIST":
            return {...newSong, artist: action.payload}
        case "SET_PRICE":
            return {...newSong, price: action.payload}
        case "SET_STYLE":
            return {...newSong, style: action.payload}
        case "SET_LYRICS":
            return {...newSong, lyrics: action.payload}
        default:
            return newSong;
    }
}


export default combineReducers({
    songs,
    cartItems,
    styles,
    newSong
})