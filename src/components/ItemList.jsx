import React from 'react';
import Item from "./Item";
import { Grid } from '@mui/material';
import "../styles/Item.css";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';


export default function ItemList({productos}) {
  
  return (
    <div  className="cards" >
     <Grid container spacing={2}>
     {!productos.length && <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="inherit" />
    </Stack>
  } 

     {productos.map((item)=>{

         return(
          <Grid item xs={12} sm={6} md={4} key={item.id} >
          <Item prendas={item}/>
          </Grid>
         );

     })};

     </Grid>
  </div>

  );
 
}

