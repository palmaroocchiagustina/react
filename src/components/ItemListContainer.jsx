import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer";
import {prendas} from "./data"
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const { idcategoria } = useParams();

  const [productos, setProductos] = useState([]);
 

 useEffect(() => {
    const productosPromise = new Promise((res, rej) => {
      setTimeout(() => {
        res(prendas);
      }, 2000);
    });

    productosPromise.then((res) => {
      if (idcategoria) {
        setProductos(res.filter((item) => item.categoria == idcategoria));
      } else {
        setProductos(res);
      }
    });
  }, [idcategoria]);

  return (
    <div>
  <ItemList productos={productos}/>;
  </div>
  );
}





/*import React ,{useState, useEffect} from 'react'
import Item from './Item'


export default function ItemListContainer() {

  const [catalogo, setCatalogo] = useState([]);

  useEffect( () => {
  
    fetch("../data.json")
    .then(res=>res.json())
    .then((resJson) =>{

  setTimeout(() => {
    
    setCatalogo(resJson);
  

   }, 2000);
  
})
.catch((e)=>{
  console.log(e);
})
.finally(()=>{
  console.log("finish");
})
},[])


 return (
  <div>
  {catalogo.map( (item)=>(

  <div className="cards" key={item.id}>
   <Item imagen={item.imagen} nombre={item.nombre} precio={item.precio} id={item.id}/>
   </div>
  ))}
  </div>
)}
 
*/



