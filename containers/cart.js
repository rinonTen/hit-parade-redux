import { connect } from 'react-redux';
import { removeFromCart, emptyCart, addToCart } from '../actions';
import Cart from '../Pages/Cart';

const mapDispatchToState  = {
    removeSong: removeFromCart,
    addToCart,
    emptyCart,
}
  
export default connect(null, mapDispatchToState) (Cart);