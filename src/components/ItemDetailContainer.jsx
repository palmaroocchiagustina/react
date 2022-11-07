import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer";
import {prendas} from "../data/data"
import ItemDetail from "./ItemDetail";


export default function ItemDetailContainer() {
  const { iditem } = useParams();

  const [producto, setProducto] = useState({});
  useEffect(() => {

    const productoPromise = new Promise((res, rej) => {
      setTimeout(() => { 
        res(prendas);
        
        }, 2000); 
      });   
        
        productoPromise.then((res) => {   
          const aux = res.find ( item =>item.id === parseInt(iditem))
          setProducto(aux); 
        
        });
      })
  
      return (

        <div className="cards" >
         <ItemDetail producto={producto}/>
         </div>
  
      )}


