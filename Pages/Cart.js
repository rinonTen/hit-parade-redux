import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CartItems from '../Components/CartItems';

function Cart({ cartItems, addToCart, removeSong, emptyCart }) {
  // Handle the buy button
  const [buyBtnText, setBuyBtnText] = useState("Buy");

  async function buyPlace() {
    // Change the text
    setBuyBtnText('Buying...')
    setTimeout(() => {
      setBuyBtnText("Bought")
    }, 3000);
    // Empty the cart
    setTimeout(() => {
      emptyCart()
    }, 5000);
  }

  // useEffect(() => {
  //   if (cartItems.length > 0) {
  //     localStorage.setItem("cartItems", JSON.stringify(cartItems))
  //   }
  // }, [cartItems])

console.log(cartItems)
  // useEffect(() => {
  //   addToCart()
  // }, [])

  const cartItemsElement = cartItems && cartItems.map(item => {
    return <CartItems key={item.id} removeSong={() => removeSong(item.id)} song={item} />
  })


  // Total price
  let totalPrice = 0;
  let pricesArr = cartItems && cartItems.map(item => item.price);
  if (pricesArr.length > 0) {
    totalPrice = pricesArr.reduce((total, price) => total + price);
  }

  const buttonAndTotalEl = pricesArr && pricesArr.length > 0 ?
    <div className="order-song">
      <button className="order-btn" onClick={buyPlace}>{buyBtnText} </button>
      <p className="total-price">Total: Ar {totalPrice}</p>
    </div> : <p>You can choose any item now!</p>;

  return (
    <div className="cart--container">
      {cartItemsElement}
      {buttonAndTotalEl}
    </div>
  )
}

export default connect((globalState) => {
  return {
    cartItems: globalState.cartItems
  }
})(Cart)