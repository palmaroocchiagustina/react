import React from 'react';
import Item from "./Item";
import { Grid } from '@mui/material';
import "../styles/Item.css"

export default function ItemList({productos}) {
  
  return (
    <div  className="cards" >
     <Grid container spacing={2}>
 
     {productos.map((item)=>{

         return(
          <Grid item xs={12} sm={6} md={4} key={item.id} >
          <Item prendas={item}/>
          </Grid>


         )

     })}

     </Grid>
  </div>

  );
 
}

