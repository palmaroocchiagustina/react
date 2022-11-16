import React, { useContext } from 'react'
//import { contextoGeneral } from './ContextContainer';
import { contextoGeneral } from './ContextContainer'
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import { Button } from '@mui/material';



export default function Cart() {

const {carrito, totalPrecio} = useContext(contextoGeneral);
const {limpiarCart} = React.useContext(contextoGeneral);


  if(carrito.length === 0){
  return(
  <>
  <p>No hay productos en el carrito.</p>
  <Link to='/'>Ver prendas</Link>
  </>
  );
}
  return (
    <div>
      {carrito.map(producto =>
      <ItemCart key={producto.id} producto={producto}/>)}
      <h3>
        Total: {totalPrecio()}
       </h3>
       <Button onClick = {()=> limpiarCart()}>Limpiar Carrito</Button>

    </div>
  )
}
