import { connect } from 'react-redux';
import { setSongs } from '../actions';
import Styles from '../Pages/Styles';

const mapDispatchToState  = {
    allSongs: setSongs
}
  
export default connect(null, mapDispatchToState) (Styles);