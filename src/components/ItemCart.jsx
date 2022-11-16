import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { ProductionQuantityLimits } from '@mui/icons-material';


import { contextoGeneral } from './ContextContainer';


export default function ItemCart({producto}) {

  const {remuvePrenda} = React.useContext(contextoGeneral);




  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={producto.imagen}
          alt="green iguana"
          margin="80"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {producto.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Cantidad:{producto.quantity}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          ${producto.precio}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Subtotal ${producto.quantity * producto.precio}        
          </Typography>
          </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary" onClick = {()=> remuvePrenda(producto.id)}>Borrar una prenda</Button>
      </CardActions>
    </Card>
  );
}

/*import React from 'react'
import { useContext } from 'react';
import { Button } from '@mui/material';



import { contextoGeneral } from './ContextContainer';


export default function ItemCart({producto}) {
    const {remuvePrenda} = useContext(contextoGeneral);
    const {limpiarCart} = useContext(contextoGeneral);
  return (
    <div>
        <img src={producto.imagen} height="200" width="150"/>
        <p>{producto.nombre}</p>
        <p>Cantidad: {producto.quantity}</p>
        <p>Precio ${producto.precio}</p>
        <p>Subtotal ${producto.quantity * producto.precio}</p>
        <div>
        <Button onClick = {()=> remuvePrenda(producto.id)}>Borrar una prenda</Button>
        <Button onClick = {()=> limpiarCart()}>Limpiar Carrito</Button>
        </div>
       


    </div>
  )
}
*/