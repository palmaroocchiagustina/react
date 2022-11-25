import { Button } from '@mui/material'
import React, { useContext, useState,handleInputChange, handleSubmit} from 'react'
import { contextoGeneral } from '../components/ContextContainer'
import {addDoc, doc , updateDoc ,collection, getFirestore} from 'firebase/firestore';
import { increment } from 'firebase/firestore';
import { grey } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/form.css';


export default function Checkout() {

  const theme = createTheme({
    palette: {
      primary: {
        main: grey[900],
      }
    },
  });
  
  const {carrito, totalAPagar, limpiarCart } = useContext(contextoGeneral)
 
  const [ nombre, setNombre] = useState("");
  const [ telefono, setTelefono] = useState("");
  const [ email, setEmail] = useState("");
  const [pedidoInsertado, setPedidoInsertado] = useState("");

  

 function validarForm() {

  const pedido = {
    buyer:{nombre, telefono, email},
    items: carrito.map(producto => ({id: producto.id, nombre: producto.nombre, precio: producto.precio, quantity: producto.quantity})),
    total: totalAPagar,

  };

  console.log(pedido);
  const db = getFirestore();
  const pedidos = collection(db, 'pedidos');

 
 
  addDoc(pedidos, pedido)
  .then((pedidoInsertado)=>{
 
   setPedidoInsertado(pedidoInsertado);
   console.log(pedidoInsertado.id);
   limpiarCart();

    carrito.forEach(item => {
      const documento = doc(db, 'productos', item.id);
      updateDoc(documento, { stock: increment(-item.stock) });
    });
  });
 }


  return (
    
    <div className='form'>
    {pedidoInsertado ? (
      "Gracias por su compra!. Revisa tu correo para obtener los datos de entrega. El numero de tu pedido es : " + pedidoInsertado.id
    ) : (
      <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="Nombre"
                            placeholder="Nombre"
                            value={nombre}
                            onChange={(e)=> setNombre(e.target.value)}
                            required
                        />
                        <br />
                        <input
                            type="email"
                            name="Email"
                            placeholder="Email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            required
                        />
                        <br />
                        <input
                            type="number"
                            name="Telefono"
                            placeholder="Telefono"
                            value={telefono}
                            onChange={(e)=> setTelefono(e.target.value)}

                            required
                        />
                        <br /><br />
                        <input
                            type="submit"
                            value="TERMINAR COMPRA"
                            className="btn btn-success"
                            onClick={validarForm}
                        />

                        
           </form>

                           )}</div>
                    )
               }
