import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer";
import {prendas} from "../data/data"
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const { idcategoria } = useParams();

  const [productos, setProductos] = useState([]);
 

 useEffect(() => {
    const productosPromise = new Promise((res, rej) => {
      setTimeout(() => {
        res(prendas);
      }, 2000);
    })

    productosPromise.then((res) => {
      if (idcategoria) {
        setProductos(res.filter((item) => item.categoria === idcategoria));
      } else {
        setProductos(res);
      }
    })
    .catch( (e)=>{
      console.log(e);
    })
  }, [idcategoria]);

  return (
    <div>
  <ItemList productos={productos}/>;
  </div>
  );
}




