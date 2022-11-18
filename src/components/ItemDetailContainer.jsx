import React from "react";
import { useState, useEffect } from "react";
import "./ItemDetailContainer";
import ItemDetail from "./ItemDetail";
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import { useParams } from "react-router-dom";



export default function ItemDetailContainer() {
  
  const { iditem } = useParams();

  const [producto, setProducto] = useState({});
 

 useEffect(() => {

const db = getFirestore();
const producto = doc(db, 'productos', iditem);

getDoc(producto).then((item)=>{

 const docNorm =  {id: item.id, ...item.data()};
 setProducto(docNorm);
  });

}, [iditem]);


      return (

        <div className="cards" >
         <ItemDetail producto={producto}/>
         </div>
  
      )}


