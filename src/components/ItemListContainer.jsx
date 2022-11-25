import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer";
import ItemList from "./ItemList";
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';



export default function ItemListContainer() {
  const { idcategoria } = useParams();

  const [productos, setProductos] = useState([]);
 

 useEffect(() => {

const db = getFirestore();
let productos;
if (idcategoria) {
  productos = query(collection(db, 'productos'), where('categoria', '==', idcategoria));
} else {
  productos = collection(db, 'productos');
}

getDocs(productos).then((res)=>{

 const arrayNorm =  res.docs.map((doc) =>{
    return{ imagen: doc.data().imagen, nombre: doc.data().nombre, categoria:doc.data().categoria ,precio:doc.data().precio, id:doc.id ,stock: doc.data().stock}
  
  });
  console.log(arrayNorm);
  setProductos(arrayNorm);
 
});
},[idcategoria]);

  return (
    <div>
  <ItemList productos={productos}/>
  </div>
  );
}

