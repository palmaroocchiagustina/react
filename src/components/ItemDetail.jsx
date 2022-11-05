import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../styles/Item.css"

export default function ItemDetail({prendas}) {
  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="350"
        image={prendas.imagen}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {prendas.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        ${prendas.precio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comprar</Button>
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

