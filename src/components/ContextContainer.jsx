import React, { useState, createContext, useEffect } from "react";
export const contextoGeneral = createContext();


export default function ContextContainer({ children }) {
  const [carrito, setCarrito] = useState( JSON.parse(localStorage.getItem("carrito")) || []);
  const [totalAPagar, setTotalAPagar] = useState(0);

//limpiar carrito 
     const limpiarCart = () => {
      setCarrito([]);
           }

// ver si esta el producto en el cart 
const verificacionCart = (id) => carrito.find( prendas => prendas.id === id ) ? true 
: false;

// limpiar por producto
 
const remuvePrenda = (id) => setCarrito(carrito.filter((prendas)=>prendas.id !== id))

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
// total productos

const totalPrendas = () => carrito.reduce((acumulador, prendaAactual)=> acumulador + prendaAactual.quantity, 0);

// total precio

const totalPrecio = () => {

return carrito.reduce((acum, act) => acum + act.quantity * act.precio, 0)


}

useEffect(()=>{

  const total =  carrito.reduce((acum, act) => acum + act.quantity * act.precio, 0)
  setTotalAPagar(total);
  localStorage.setItem("carrito", JSON.stringify(carrito));

}, [carrito]);
 console.log('carrito:', carrito);

  return (
    <contextoGeneral.Provider value={{  
      limpiarCart,
      verificacionCart,
      remuvePrenda, 
      pushCart, 
      totalPrendas,
      totalPrecio,
      carrito, 
      setCarrito,
      totalAPagar
       }}>
      {children}
    </contextoGeneral.Provider>
  );
}











