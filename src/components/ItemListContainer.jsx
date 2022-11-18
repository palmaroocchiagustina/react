import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer";
import ItemList from "./ItemList";
import {getFirestore, collection, getDocs} from 'firebase/firestore';



export default function ItemListContainer() {
  const { idcategoria } = useParams();

  const [productos, setProductos] = useState([]);
 

 useEffect(() => {

const db = getFirestore();
const productos = collection(db, 'productos');

getDocs(productos).then((res)=>{

 const arrayNorm =  res.docs.map((doc) =>{
    return{ imagen: doc.data().imagen, nombre: doc.data().nombre, categoria:doc.data().categoria ,precio:doc.data().precio, id:doc.id ,stock: doc.data().stock}
  
  });
  console.log(arrayNorm);

  if (idcategoria) {
   setProductos(arrayNorm.filter((item) => item.categoria === idcategoria));
  } else {
     setProductos(arrayNorm);
   }
}) 
}, [idcategoria]);

  return (
    <div>
  <ItemList productos={productos}/>
  </div>
  );
}




