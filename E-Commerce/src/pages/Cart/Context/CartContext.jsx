//   import {
//     createContext, useEffect, useState
// } from 'react';
// import {numberFormat} from '../../../components/Elements/numberFormat.js'

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [cartList, setCartList] = useState(localStorage.getItem('cartList') ? JSON.parse(localStorage.getItem('cartList')) : [])

  
//     const addToCartList = (item) => {
//         console.log({item})
//         const isItemInCart = cartList.find((cartItem) => cartItem.id == item.id); 
//         // check if the item is already in the cartList
//         if (isItemInCart) {
//         setCartList(
//             cartList.map((cartItem) => 
//                 //check if the item is in the array, then update the quantity
//             cartItem.id == item.id
//                 ? { ...cartItem, quantity: cartItem.quantity + 1 }
//                 //otherwise return the item unchanged
//                 : cartItem 
//             )
//         );
//         } else {
//             // if the item is not in the cartList, add the item to the cart
//         setCartList([...cartList, { ...item, quantity: 1 }]); 
//         }
//       };

//       const setQuantityToCartItem =(item,qty) =>{
//         const isItemInCart = cartList.find((cartItem) => cartItem.id == item.id); 
//         // check if the item is already in the cartList
//         if (isItemInCart) {
//         setCartList(
//             cartList.map((cartItem) => 
//                 //check if the item is in the array, then set the quantity
//             cartItem.id == item.id
//                 ? { ...cartItem, quantity: qty }
//                 //otherwise return the item unchanged
//                 : cartItem 
//             )
//         );

//       }
//     }

//       const removeFromCartList = (item) => {
//         const isItemInCart = cartList.find((cartItem) => cartItem.id == item.id);
      
//         if (isItemInCart.quantity === 1) {
//             // if the quantity of the indexed item is 1, remove the item from the cartList
//           setCartList(cartList.filter((cartItem) => cartItem.id != item.id)); 
//         } else {
//           setCartList(
//             cartList.map((cartItem) =>
//                 // if the quantity of the indexed item is greater than 1, decrease the quantity by -1
//               cartItem.id == item.id
//                 ? { ...cartItem, quantity: cartItem.quantity - 1 } 
//                 : cartItem
//             )
//           );
//         }
//       };
//       // remoove the item object irrespective of the quantity of the item  
//       const removeItemFromCartList = (item) =>{
//         setCartList(cartList.filter((value)=>{return item.id != value.id}))
//       };
//       const clearCartList = () => {
//         // set the cartList to an empty array
//         setCartList([]); 
//       };

//       const getCartTotal = () => {
//         // calculate the total price of the items in the cartList
//         return numberFormat(cartList.reduce((total, item) => total + item.price * item.quantity, 0)); 
//       };

//       useEffect(() => {
//         //for development purpose and without database API not generated 
//         // The localStorage serves as database to keep track of the cartList
//         localStorage.setItem("cartList", JSON.stringify(cartList));
//       }, [cartList]);

//       useEffect(() => {
//         //for development purpose and without database API not generated 
//         // The localStorage serves as database to keep track of the cartList
//         const cartItems = localStorage.getItem("cartItems");
//         if (cartItems) {
//           setCartList(JSON.parse(cartItems));
//         }
//       }, []);
//       return (
//         <CartContext.Provider
//           value={{
//             cartList,
//             addToCartList,
//             removeFromCartList,
//             removeItemFromCartList,
//             setQuantityToCartItem,
//             clearCartList,
//             getCartTotal,
//           }}
//         >
//           {children}
//         </CartContext.Provider>
//       );
// }

import create from "zustand";
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
  cart: [],
  addToCart: (item) => set((state) => {
    const existingProduct = state.cart.find(product => item.id === product.id);
        if (existingProduct) {
          // Increase quantity if product already exists
          return {
            cart: state.cart.map(product =>
              item.id === product.id
                ? { ...product, quantity: product.quantity + 1 }
                : item
            ),
          };
        } else { 
          return { cart: [...state.cart, item]};

        } 
  }),
  reduceItemQuantity: (id) => set((state) =>({
    cart: state.cart.map((cartItem) =>
      // if the quantity of the indexed item is greater than 1, decrease the quantity by -1
       cartItem.id == id
      ? { ...cartItem, quantity: cartItem.quantity - 1 } 
      : cartItem
  )
  })),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
  })),  
  clearCart: () => set(() =>({ cart: [] })),
  
  updateQuantity: (productId, quantity) => set((state) => ({
    cart: state.cart.map(item =>
      item.id === productId ? { ...item, quantity } : item
    ),
  })),

  // Calculate the total price of all items in the cart
  getTotalPrice: () => {
    return ( get().cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ));
  },
}),
  {
    name: 'cart-storage', // Key for local storage
    getStorage: () => localStorage, // Use localStorage to persist cart data
  }
));