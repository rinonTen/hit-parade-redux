import React, {useEffect} from 'react'; 
import { connect } from 'react-redux';

import SongsComponent from '../containers/songsComponents';

function Songs({ allSongs, getSongs}) { 

    useEffect(() => {
        if (allSongs.length > 0) {
            localStorage.setItem("allSongs", JSON.stringify(allSongs))
        }
    }, [allSongs])

    useEffect(() => {
        getSongs()
    }, [])
     
    const songsElement = allSongs && allSongs.sort((songA, songB) => {
        const song1 = songA.upvotes - songB.upvotes;
        const song2 = songA.downvotes - songB.downvotes;
        return song2 - song1;
    }).map(song => {
        return <SongsComponent key={song.id} song={song} />
    })

    return (
        <div>
            {songsElement}
        </div>
    )
}

const mapPropsToState = (globalState) => {
    return {
      allSongs: globalState.songs
    }
  }
  
  export default connect(mapPropsToState) (Songs);
 
