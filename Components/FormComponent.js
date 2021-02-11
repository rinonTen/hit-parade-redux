import React from 'react'
import { connect } from 'react-redux'

function FormComponent({ addSong,  setTitle, setArtist, setPrice, setStyle, setLyrics, title, artist, price, style, lyrics}) {
    const newSong = {
        id: Date.now(),
        title: title,
        artist: artist,
        price: price,
        upvotes: 0,
        downvotes: 0,
        isFavorited: false,
        style: style,
        lyrics: lyrics,
    }

    const addNewSong = (e) => {
        e.preventDefault();
        addSong(newSong)
        setTitle("");
        setPrice("");
        setArtist("");
        setLyrics("");
    }
 
    return (
        <div className="form-container">
            <h2>🌚 Add a new song</h2>
            <form className="add-song-form" onSubmit={addNewSong}>
                <div className="container">
                    <label htmlFor="title">Add a title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle && setTitle(e.target.value)} name="title" id="title" required />
                    <label htmlFor="artist">Artist:</label>
                    <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} name="artist" id="artist" required />
                    <label htmlFor="price">Price:</label>
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} name="price" id="price" required />
                    <label htmlFor="styles">Style of the song:</label>
                    <select name="styles" value={style} onChange={(e) => setStyle(e.target.value)} id="styles">
                        <option value="country">Country</option>
                        <option value="kilalaka">Kilalaka</option>
                        <option value="RNB">RNB</option>
                        <option value="Pop">Pop</option>
                        <option value="tsapiky">Tsapiky</option>
                        <option value="slow">Slow</option>
                    </select>
                    <label htmlFor="lyrics"></label>
                    <textarea value={lyrics} name="lyrics" onChange={(e) => setLyrics(e.target.value)} id="lyrics" cols="30" rows="10" required></textarea>
                </div>
                <div className="button-container">
                    <button className="submit-btn">Add</button>
                </div>
            </form>
        </div >
    )
}

export default connect((globalState) => {
    return {
        title: globalState.newSong.title,
        artist: globalState.newSong.artist,
        price: globalState.newSong.price,
        style: globalState.newSong.style,
        lyrics: globalState.newSong.lyrics,
    }
})(FormComponent);
