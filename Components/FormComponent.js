import React from 'react'

export default function FormComponent({ handleForm }) {
    const newSong = (e) => {
        e.preventDefault();
        const form = e.target;
        const { title, artist, price, styles, lyrics } = form;
        const newSongObj = {
            id: Date.now(),
            title: title.value,
            artist: artist.value,
            price: price.value,
            upvotes: 0,
            downvotes: 0,
            isFavorited: false,
            style: styles.value,
            lyrics: lyrics.value,
        }
        allSongs.push(newSongObj);
        setAllSongs([...allSongs])
        form.reset();
    }
    return (
        <div className="form-container">
            <h2>🌚 Add a new song</h2>
            <form className="add-song-form" onSubmit={(e) => handleForm(
                e.preventDefault()
            )}>
            <div className="container">
                <label htmlFor="title">Add a title:</label>
                <input type="text" name="title" id="title" required />
                <label htmlFor="artist">Artist:</label>
                <input type="text" name="artist" id="artist" required />
                <label htmlFor="price">Price:</label>
                <input type="text" name="price" id="price" required />
                <label htmlFor="styles">Style of the song:</label>
                <select name="styles" id="styles">
                    <option value="country">Country</option>
                    <option value="kilalaka">Kilalaka</option>
                    <option value="RNB">RNB</option>
                    <option value="Pop">Pop</option>
                    <option value="tsapiky">Tsapiky</option>
                    <option value="slow">Slow</option>
                </select>
                <label htmlFor="lyrics"></label>
                <textarea name="lyrics" id="lyrics" cols="30" rows="10" required></textarea>
            </div>
            <div className="button-container">
                <button className="submit-btn">Add</button>
            </div>
            </form>
        </div >
    )
}
