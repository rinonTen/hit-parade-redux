import { connect } from 'react-redux';
import { removeFromCart, emptyCart, addToCart, storeCartToLocalStorage } from '../actions';
import Cart from '../Pages/Cart';

const mapDispatchToState  = {
    removeSong: removeFromCart,
    addToCart,
    storeCartToLocalStorage,
    emptyCart,
}
  
export default connect(null, mapDispatchToState) (Cart);