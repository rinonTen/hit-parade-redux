import React, { useEffect } from 'react'; 
import { connect } from 'react-redux';

import SongsComponent from '../Components/SongsComponent';

function Songs({ allSongs }) { 
 
    const songsElement = allSongs && allSongs.map(song => {
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
 
