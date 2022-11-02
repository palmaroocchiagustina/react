import React ,{useState, useEffect} from 'react'
import Item from './Item'

export default function ItemDetail() {

  const [producto, setProducto] = useState([]);

  useEffect( () => {
  
    fetch("/datadetail.json")
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
 