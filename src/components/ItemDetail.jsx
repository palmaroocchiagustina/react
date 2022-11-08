import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "../styles/Item.css"
import ItemCount from './ItemCount';

export default function ItemDetail({producto}) {
  
  const onAdd = (cantidad) =>{
    alert(`Compraste ${cantidad} unidades`)
  }
  
  
  return (
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
      </CardContent>
      <CardActions>
         <ItemCount initial = {1} stock={10} onAdd={onAdd}/>
        
      </CardActions>
    </Card>
    
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

