import React from 'react'
import { Link } from "react-router-dom";
import "../styles/Item.css"


export default function Item({item}) {
  return (
    <div className='cards' key={item.id}>
            {JSON.stringify(item)}

        <Link to={"/item/" + item.id} >VER MAS</Link>
        <br />
        <br />
      </div>
  );
}





/*import React from 'react'

import '../styles/Item.css'
//import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography} from '@mui/material'

export default function Item({imagen, nombre, precio, id}) {
  return (
    <div>
  <img src={imagen} alt={imagen} height='270px' width='200px'/>
  <h2>{nombre}</h2>
  <p>${precio}</p>
  <button id={id}>Comprar</button>
    </div>
  )
}
*/


