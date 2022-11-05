import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer";
import {prendas} from "./data"
import ItemDetail from "./ItemDetail";
import { Grid } from '@mui/material';


export default function ItemDetailContainer() {
  const { iditem } = useParams();

  const [producto, setProducto] = useState({});
  useEffect(() => {

    const productoPromise = new Promise((res, rej) => {
      setTimeout(() => {
        res(prendas.find((item)=> item.id === iditem));
      }, 2000);
    });

    productoPromise.then((res) => {
     
        setProducto(res);
    });
        
  }, [iditem]);
  
  
    return (
      <div>
      {producto.map( (item)=>(
    
      <div className="cards" key={item.id}>
       <ItemDetail imagen={item.imagen} nombre={item.nombre} precio={item.precio} id={item.id}/>
       </div>
      ))}
      </div>
    )}



/*import React ,{useState, useEffect} from 'react'
import Item from './Item'

export default function ItemDetailContainer() {

  const [producto, setProducto] = useState([]);

  useEffect( () => {
  
    fetch("../data.json")
   .then(res=>res.json())
    .then((resJson) =>{

  setTimeout(() => {
    
    setProducto(resJson);
   }, 2000);
   })
   .catch((e)=>{
    console.log(e);
   })
   .finally(()=>{
  console.log("finish");
   })
},[])

console.log(producto);
 return (
  <div>
  {producto.map( (item)=>(

  <div className="cards" key={item.id}>
   <Item imagen={item.imagen} nombre={item.nombre} precio={item.precio} id={item.id}/>
   </div>
  ))}
  </div>
)}
 */