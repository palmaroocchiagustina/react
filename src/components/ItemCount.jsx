import React, {useState, useEffect} from 'react'
import Button from '@mui/material/Button';


export default function ItemCount({initial, stock, onAdd}) {


  const [contador, setContador]= useState(initial);

  const sumarStock = ()=>{

    setContador(contador +1);
  };

 const restarStock = ()=>{

    setContador(contador -1);
  };
  
  useEffect(()=>{
    setContador(parseInt(initial));
  },[initial])
  
  return (
    <>
    <div>
    <Button variant="contained" disabled = {contador >= stock} onClick={sumarStock}> + </Button>
    <div><p>Contador {contador}</p></div>
    <Button variant="outlined" disabled = {contador <= 0 } onClick={restarStock}>-</Button></div>
    <div>
    <Button variant="contained" disabled = {stock <= 0 || contador <= 0} onClick = {()=> onAdd(contador)}> Agregar al carrito</Button>
    </div> 
</>
  )
}
