export function cartItems(cartItems = [], action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return [...cartItems, action.payload]
        case "STORE_CART_TO_LOCAL_STORAGE": 
            return action.payload
        case "REMOVE_FROM_CART":
            return cartItems.filter(item => item.id !== action.payload)
        case "EMPTY_CART":
            return []
        default:
            return cartItems
    }
}
