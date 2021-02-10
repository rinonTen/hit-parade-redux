import React from 'react'; 
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import LyricsComponent from '../Components/LyricsComponent';


function Lyrics({allSongs}) {
    const {songId} = useParams(); 
  
    const songLyrics = allSongs.find(song => song.id == songId); 
    return (
        <div>
            {
                songLyrics && <LyricsComponent song={songLyrics}/>
            }
        </div>
    )
}

export default connect((globalState) => {
    return {
        allSongs: globalState.songs
    }
})(Lyrics);
