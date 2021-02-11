import { connect } from 'react-redux';
import { getSongs } from '../actions';
import Styles from '../Pages/Styles';

const mapDispatchToState  = {
    getSongs
}
  
export default connect(null, mapDispatchToState) (Styles);