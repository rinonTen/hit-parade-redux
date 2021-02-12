export function songs(songs = [], action) {
    switch (action.type) {
        case "GET_SONGS":
            return action.payload
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
