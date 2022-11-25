import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { contextoGeneral } from './ContextContainer';
import { grey } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';



export default function ItemCart({producto}) {

  const theme = createTheme({
    palette: {
      primary: {
        main: grey[900],
      }
    },
  });
  
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
      <ThemeProvider theme={theme}>
      <Button size="small" variant="contained" startIcon={<DeleteIcon />} onClick = {()=> remuvePrenda(producto.id)}>Eliminar producto</Button>

      </ThemeProvider>
      </CardActions>
    </Card>
  );
}
