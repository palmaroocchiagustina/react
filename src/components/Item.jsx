import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import "../styles/Item.css";
import { Button } from '@mui/material';
import { grey } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Item({prendas}) {

  const theme = createTheme({
    palette: {
      primary: {
        main: grey[900],
      }
    },
  });

  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        component="img"
        alt="imagen"
        height="350"
        src={prendas.imagen}        
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
      <ThemeProvider theme={theme}>
      <Button variant="contained"><Link className='link' to={`/item/${prendas.id}`}>+ info</Link></Button>
      </ThemeProvider>
      </CardActions>
    </Card>
  );
}








