import React from 'react'
import ItemCount from './ItemCount'

export default function ItemListContainer() {

  const onAdd = (cantidad)=>{

    alert(`Compraste ${cantidad} prendas`);
    
  }
  
  return (
    <div>
    <ItemCount initial={0} stock={6} onAdd={onAdd}/>
    </div>
  )
}

