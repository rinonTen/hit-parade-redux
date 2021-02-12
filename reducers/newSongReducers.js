
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
