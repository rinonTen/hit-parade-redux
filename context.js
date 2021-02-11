import React, { useEffect, useState } from 'react';
import SongsData from './HitParadeData';

const Context = React.createContext();

function UseContextProvider(props) {
    const [allSongs, setAllSongs] = useState([]);
    const [cartItems, setCartItems] = useState([]);
     
   
     
    // Set the cart items to the local storage
    function initCartItems() {
        const lsCartItems = JSON.parse(localStorage.getItem("cartItems"));
        if (lsCartItems) {
            setCartItems(lsCartItems);
        }
    }

    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem("cartItems", JSON.stringify(cartItems))
        } 
    }, [cartItems])

    useEffect(() => {
        getSongs();
        initCartItems()
    }, [])

     
     
   
         
 

      
     
    
    return <Context.Provider value={{ }}>
        {props.children}
    </Context.Provider>
}

export { UseContextProvider, Context }
