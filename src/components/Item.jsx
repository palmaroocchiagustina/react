import React from 'react'
import '../styles/Item.css'

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





/*import React from 'react'
import '../styles/Item.css'

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