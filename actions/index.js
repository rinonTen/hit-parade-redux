

export function setSongs() {  
    return {
        type: "SET_SONGS", 
    }
}

export function addSong(song) {  
    return {
        type: "ADD_SONG", 
        payload: song
    }
}

export function setCartItems(songs) {
    return {
        type: "SET_CART_ITEMS",
        payload: songs
    }
}

export function addToCart() {  
    return {
        type: "ADD_TO_CART", 
    }
}


export function setStyles(styles) {
    return {
        type: "SET_STYLES",
        payload: styles
    }
}