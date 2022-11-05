import React from 'react';
import Item from "./Item";
import { Grid } from '@mui/material';

export default function ItemList({productos}) {
  //.log(productos);
  return (
    <div >
    
    {!productos.length && "Loading..."}
    {productos.map((item) => (
      <Item item={item}/>
      
    ))}

  </div>

  );
 
}



















/*import React from 'react'
import ItemCount from './ItemCount'


export default function ItemList({}) {

  const onAdd = (cantidad)=>{

    alert(`Compraste ${cantidad} prendas`);
    
  }
  
  return (
    <div>
    <ItemCount initial={0} stock={6} onAdd={onAdd}/>
    </div>
  )
}
*/