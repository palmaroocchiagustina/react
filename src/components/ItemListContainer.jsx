import React from 'react'

export default function ItemListContainer({greeting, fondo}) {
  return (
    <div className='greeting' style={{backgroundColor: fondo}} >
    <p> {greeting} </p>
    </div>
  )
}
