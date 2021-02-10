

export function setSongs() {  
    return {
        type: "SET_SONGS", 
    }
}

export function setCartItems(songs) {
    return {
        type: "SET_CART_ITEMS",
        payload: songs
    }
}

export function setStyles(styles) {
    return {
        type: "SET_STYLES",
        payload: styles
    }
}