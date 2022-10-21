import React from 'react'

export default function ItemListContainer({greeting, fondo}) {
  return (
    <div style={{backgroundColor: fondo}} >
    <p> {greeting} </p>
    </div>
  )
}
