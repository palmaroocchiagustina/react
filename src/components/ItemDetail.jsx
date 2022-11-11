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
import { contextoGeneral } from './ContextContainer';
export default function ItemDetail({producto}) {

 // const {agregarCart, setAgregarCart} = useContext(contextoGeneral);
  const [agregarCart, setAgregarCart] = useState();
  const { pushCart } = useContext(contextoGeneral);
  const onAdd = (x, quantity) =>{
    
     setAgregarCart(x)
     pushCart(producto, quantity);
   // alert("Compraste " +  x + " unidades " + producto.nombre);
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
        <Typography gutterBottom variant="h5" component="div">
         Categoria {producto.categoria}
         </Typography>
        <Typography variant="body2" color="text.secondary">
        ${producto.precio}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Stock: {producto.stock}
        </Typography>
      </CardContent>
      <CardActions>
         {
          agregarCart ? <Link to ='/cart'>Terminar compra</Link>
          : <ItemCount initial = {1} stock={producto.stock} onAdd={onAdd}/>

         }
        
      </CardActions>
    </Card>
    ) : (
      <>Loading...</>
    )}
    </div>
  );
}
























/*import React from 'react'

export default function ItemDetail({producto}) {
  return (
    <div>
    {
      producto.id ? (
        <>
          {producto.imagen + producto.nombre + producto.precio + producto.categoria + producto.id}
        </>

      ): <>Loading...</>}
  </div>
  )
}
*/













/*import React from 'react'
//import ItemDetail from './ItemDetail'
import ItemDetailContainer from './ItemDetailContainer'

export default function ItemDetail() {

  
  return (
    <div>
      <ItemDetailContainer/>
    </div>
  )
}
*/

