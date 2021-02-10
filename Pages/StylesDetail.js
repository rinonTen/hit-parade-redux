import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import headset from '../images/headset.svg';
import StyleDetailComponent from '../Components/StyleDetailsComponent';
import { connect } from 'react-redux';

function StylesDetail({ allSongs }) {
    const { styleName } = useParams();
    const styles = allSongs.filter(song => song.style == styleName);

    const styleDetailEl = styles.map(song => {
        return <StyleDetailComponent key={song.id} song={song} />
    })
    return (
        <div>
            <div className="style--container">
                <img src={headset} alt="headphone image" />
                <p>{styleName}</p>
            </div>
            {styleDetailEl}
        </div>
    )
}

export default connect((globalState) => {
    return {
        allSongs: globalState.songs
    }
})(StylesDetail);
