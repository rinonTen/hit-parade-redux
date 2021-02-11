import allSongs from '../HitParadeData';

export function getSongs() {
    return async (dispatch) => {
        const lsAllSongs = JSON.parse(localStorage.getItem("allSongs"))
        // Set the local Storage value to state
        dispatch({
            type: 'GET_SONGS',
            payload: lsAllSongs ? lsAllSongs : allSongs
        })
    }
}

export function addSong(song) {
    return {
        type: "ADD_SONG",
        payload: song
    }
}

export function setStyles(styles) {
    return {
        type: "SET_STYLES",
        payload: styles
    }
}

export function toggleFavorite(idToToggle) {
    return {
        type: "TOGGLE_FAVORITE",
        payload: idToToggle
    }
}

export function incrementUpVotes(idToIncrement) {
    return {
        type: "INCREMENT_UPVOTES",
        payload: idToIncrement
    }
}

export function incrementDownVotes(idToIncrement) {
    return {
        type: "INCREMENT_DOWNVOTES",
        payload: idToIncrement
    }
}
export function toggleCart(idToToggle) {
    return {
        type: "TOGGLE_CART",
        payload: idToToggle
    }
}

export function addToCart(cartItems) {
    return async (dispatch) => {
        const lsCartItems = JSON.parse(localStorage.getItem("cartItems"));
        dispatch({
            type: 'ADD_TO_CART',
            payload: lsCartItems ? lsCartItems : cartItems
        })
    }
}

export function removeFromCart(song) {
    return {
        type: "REMOVE_FROM_CART",
        payload: song
    }
}

export function emptyCart() {
    return {
        type: "EMPTY_CART"
    }
}

export function setTitle(value) {
    return {
        type: "SET_TITLE",
        payload: value
    }
}

export function setArtist(value) {
    return {
        type: "SET_ARTIST",
        payload: value
    }
}
export function setPrice(value) {
    return {
        type: "SET_PRICE",
        payload: value
    }
}
export function setStyle(value) {
    return {
        type: "SET_STYLE",
        payload: value
    }
}
export function setLyrics(value) {
    return {
        type: "SET_LYRICS",
        payload: value
    }
}