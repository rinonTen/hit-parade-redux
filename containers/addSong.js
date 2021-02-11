import { connect } from 'react-redux';
import { addSong, setTitle, setArtist, setPrice, setStyle, setLyrics, } from '../actions';
import FormComponent from '../Components/FormComponent';

const mapDispatchToState = {
    addSong,
    setTitle,
    setArtist,
    setPrice,
    setStyle,
    setLyrics,
}

export default connect(null, mapDispatchToState)(FormComponent);