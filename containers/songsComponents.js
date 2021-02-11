import { connect } from 'react-redux';
import { toggleFavorite, toggleCart, incrementUpVotes, incrementDownVotes, addToCart } from '../actions';
import SongsComponents from '../Components/SongsComponent';

const mapDispatchToState  = { 
    toggleFavorite,
    incrementUpVotes,
    incrementDownVotes,
    toggleCart,
    addToCart,
}
  
export default connect(null, mapDispatchToState) (SongsComponents);