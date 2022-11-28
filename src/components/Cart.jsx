import React, { useContext } from 'react'
import { contextoGeneral } from './ContextContainer'
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import "../styles/alert.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import "../styles/cart.css";

export default function Cart() {

  const theme = createTheme({
    palette: {
      primary: {
        main: grey[900],
      }
    },
  });
const {carrito, totalPrecio, limpiarCart} = useContext(contextoGeneral);


  if(carrito.length === 0){
  return(

    <Stack sx={{ width: '100%' }} spacing={2}>
    
    <Alert className='alert' variant="filled"  severity="info">
      <AlertTitle>Info</AlertTitle>
      No hay productos en el carrito.
      <Link className='link'  to='/'> Ver prendas</Link>
    </Alert>
    
  </Stack>

  );
}
  return (
 <div className='cart'>
 <div>
   {carrito.map(producto =>
   <ItemCart key={producto.id} producto={producto}/>)}
   </div>
   <div>
   <h3 className='total'>
     Total:  ${totalPrecio()}
    </h3>
   <div className='button'>
   <ThemeProvider theme={theme}>
    <Button variant="contained" onClick = {()=> limpiarCart()}>Vaciar carrito</Button>
    </ThemeProvider>
    <ThemeProvider theme={theme}>
   <Button variant="contained"><Link className='link' to='/checkout'>FINALIZAR COMPRA</Link></Button>
   </ThemeProvider> 
   </div>
 </div>
 </div>
   
  )
}
