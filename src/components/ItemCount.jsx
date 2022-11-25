import React, {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import "../styles/Itemcount.css";
import { grey } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function ItemCount({initial, stock, onAdd}) {

  const theme = createTheme({
    palette: {
      primary: {
        main: grey[900],
      }
    },
  });

  const [contador, setContador]= useState(initial);

  const sumarStock = ()=>{
    if(contador < stock){

      setContador(contador +1);

    }
  };

 const restarStock = ()=>{

    if(contador >= 2){

      setContador(contador -1);

    };
  };
  
  useEffect(()=>{
    setContador(parseInt(initial));
  },[initial])
  
  return (
    <ThemeProvider theme={theme}>
    <div className='itemcount'>
    <Button variant="contained" disabled = {contador >= stock} onClick={sumarStock}> + </Button>
     </div>
    <p>{contador}</p>
    <div>
    <Button variant="outlined" disabled = {contador <= 0 } onClick={restarStock}>-</Button>
    </div>
    <div>
    <Button variant="contained" disabled = {stock <= 0 || contador <= 0} onClick = {()=> onAdd(contador)}> Agregar al carrito</Button>
    </div> 
</ThemeProvider>
  )
}