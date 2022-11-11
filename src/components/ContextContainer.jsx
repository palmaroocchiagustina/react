import React, { useState, createContext } from "react";
import { prendas } from "../data/data.js"
export const contextoGeneral = createContext();


export default function ContextContainer({ children }) {
  const [carrito, setCarrito] = useState([]);
  
//limpiar carrito 
     const limpiarCart = () => {
      setCarrito([]);
           }

// ver si esta el producto en el cart 
const verificacionCart = (id) => carrito.find( prendas => prendas.id === id ) ? true 
: false;

// limpiar por producto

const remuvePrenda = (id) => setCarrito(carrito.filter(prendas.id !== id));

// add cart

const pushCart = (item, quantity) =>{

let newCart;
let product = carrito.find(product => product.id === item.id);
if(product){
  product.quantity += quantity;
  newCart = [...carrito];
}else{
  product = { ...item, quantity: quantity};
  newCart = [...carrito, product];
}
setCarrito(newCart)
}

/*const pushCart = (item, quantity) =>{
  
  if (verificacionCart(item.id)){
    setCarrito(carrito.map(prod =>{
      return prod.id === item.id ? {...prod, quantity: prod.quantity + quantity} : prod
    }));

  }else {
    setCarrito([...carrito, {...item, quantity }])
  }
}


/*const pushCart = (item, newQuantity) => {

const newCart = carrito.filter(prod => prod.id !== item.id)
newCart.push ({...item, quantity: newQuantity});
setCarrito(newCart);

}*/
 console.log('carrito:', carrito);

 

  return (
    <contextoGeneral.Provider value={{  
      limpiarCart,
      verificacionCart,
      remuvePrenda, 
      pushCart, 
       }}>
      {children}
    </contextoGeneral.Provider>
  );
}











/*import React, {useState, useContext} from 'react'
import { prendas } from '../data/data';
 const CartContext = React.createContext([]);

export const ContextContainer = () => useContext(CartContext);
const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);

    //limpiar carrito 
    const limpiarCart = () => {
        setCart([]);
    }


// ver si esta el producto en el cart 
const verificacionCart = (id) => cart.find( prendas => prendas.id === id ) ? true 
: false;

// limpiar por producto

const remuvePrenda = (id) => setCart (cart.filter(prendas.id !== id));

// add cart

const pushCart = (item, newQuantity) => {

const newCart = cart.push ({...item, quantity: newQuantity});
setCart(newCart);

}
 console.log('carrito:', cart);

  return (
    <CartContext.Provider value={{
      limpiarCart,
      verificacionCart,
      remuvePrenda,  
    }}>
        {children}
    </CartContext.Provider>
  )
}
*/