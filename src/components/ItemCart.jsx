import React from 'react'
import { useContext } from 'react';
import { Button } from '@mui/material';



import { contextoGeneral } from './ContextContainer';


export default function ItemCart({producto}) {
    const {remuvePrenda} = useContext(contextoGeneral);
    const {limpiarCart} = useContext(contextoGeneral);
  return (
    <div>
        <img src={producto.imagen} height="200" width="150"/>
        <p>{producto.nombre}</p>
        <p>Cantidad: {producto.quantity}</p>
        <p>Precio ${producto.precio}</p>
        <p>Subtotal ${producto.quantity * producto.precio}</p>
        <Button onClick = {()=> remuvePrenda(producto.id)}>Borrar una prenda</Button>
        <Button onClick = {()=> limpiarCart()}>Limpiar Carrito</Button>


    </div>
  )
}
