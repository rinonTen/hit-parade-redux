import { connect } from 'react-redux';
import { setSongs } from '../actions';
import StylesDetail from '../Pages/Songs';

const mapDispatchToState  = {
    allSongs: setSongs
}
  
export default connect(null, mapDispatchToState) (StylesDetail);