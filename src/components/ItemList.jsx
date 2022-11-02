import React ,{useState, useEffect} from 'react'
import Item from './Item'

export default function ItemList() {

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
 
  

  


/*import { useState, useEffect  } from "react";
import Item from "./Item";
import remera from "../img/remera.jpg"
import toprayas from "../img/toprayas.jpg"
import jeans from "../img/jeans.jpg"
import campera from "../img/campera.jpg"
import zapatillas from "../img/zapatillas.jpg"
import blazer from "../img/blazer.jpg"




export default function ItemList() {

  const Prendas = [

    {id:1, imagen : remera, nombre: "Remera",precio: 2000 },
    {id:2, imagen : toprayas ,nombre : "Top rayas",precio: 3000},
    {id: 3, imagen : jeans ,nombre : "Jeans",precio: 10000},
    {id: 4, imagen : campera ,nombre : "Campera de jeans",precio: 12000},
    {id: 5,imagen : zapatillas ,nombre : "Zapatillas",precio: 20000},
    {id: 6, imagen : blazer ,nombre : "Blazer rosa",precio: 20000},
  
  ];

const [Catalogo, setCatalogo] = useState([])

useEffect(()=>{

  const fetchign = new Promise((resolve, reject) => {
  
  setTimeout(() => {

  resolve(Prendas);

}, 2000);  

  })

  fetchign.then(res=>{

    setCatalogo(res);

    console.log(res);
  })
 .catch((err)=> console.log(err))
},[])



  return (
     Catalogo.map(item=>{

      return <div className="cards" key={item.id}>
      <Item imagen={item.imagen} nombre={item.nombre} precio={item.precio} id={item.id}/>
      </div>
    })
  )
}

*/
