import { connect } from 'react-redux';
import { setSongs } from '../actions';
import Lyrics from '../Pages/Lyrics';

const mapDispatchToState  = {
    allSongs: setSongs
}
  
export default connect(null, mapDispatchToState) (Lyrics);