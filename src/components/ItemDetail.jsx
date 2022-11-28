import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "../styles/Item.css"
import ItemCount from './ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';
import { contextoGeneral } from './ContextContainer';
import '../styles/link.css';
import { grey } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function ItemDetail({producto}) {

  const theme = createTheme({
    palette: {
      primary: {
        main: grey[900],
      }
    },
  });
  

  const [agregarCart, setAgregarCart] = useState(false);
  const { pushCart } = useContext(contextoGeneral);
  
  const onAdd = (quantity) =>{
    
     setAgregarCart(true);
     pushCart(producto, quantity);
   
  }
  
  
  return (

    <div>
    {producto.id ?(
    <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        component="img"
        alt="imagen"
        height="350"
        image={producto.imagen}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {producto.nombre}
        
        </Typography>
        <Typography gutterBottom variant="h6" color="text.secondary" component="div">
         Categoria: {producto.categoria}
         </Typography>
        <Typography variant="h6" color="text.secondary">
         Precio: ${producto.precio}
        </Typography>
        <Typography variant="h6" color="text.secondary">
        Stock: {producto.stock}
        </Typography>
      </CardContent>
      <CardActions>
         {
          agregarCart  ? <ThemeProvider theme={theme}>
          <Button variant="contained"><Link className='link' to ='/cart'>Ver el carrito</Link></Button>
          </ThemeProvider>
        : <ItemCount initial = {1} stock={producto.stock} onAdd={onAdd}/>

         }
      </CardActions>
     
    </Card>
    ) : (
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="inherit" />
    </Stack>
    )}
    </div>
  );
}
























