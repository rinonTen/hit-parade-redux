import { connect } from 'react-redux';
import { getSongs } from '../actions';
import StylesDetail from '../Pages/StylesDetail';

const mapDispatchToState  = {
   allSongs: getSongs,
}
  
export default connect(null, mapDispatchToState) (StylesDetail);