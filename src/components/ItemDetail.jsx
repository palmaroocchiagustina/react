import React from 'react'

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

