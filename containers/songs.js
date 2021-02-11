import { connect } from 'react-redux';
import { getSongs, storeSongs, toggleFavorite } from '../actions';
import Songs from '../Pages/Songs';

const mapDispatchToState  = { 
    getSongs, 
    toggleFavorite,
}
  
export default connect(null, mapDispatchToState) (Songs);