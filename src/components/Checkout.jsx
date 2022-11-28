import React, { useContext, useState} from 'react'
import { contextoGeneral } from '../components/ContextContainer'
import {addDoc, doc , updateDoc ,collection, getFirestore} from 'firebase/firestore';
import { increment } from 'firebase/firestore';
import '../styles/form.css';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


export default function Checkout() {

  
  const {carrito, totalAPagar, limpiarCart } = useContext(contextoGeneral)
 
  const [ nombre, setNombre] = useState("");
  const [ telefono, setTelefono] = useState("");
  const [ email, setEmail] = useState("");
  const [pedidoInsertado, setPedidoInsertado] = useState("");



  function validarForm(evt) {
    evt.preventDefault();
    const pedido = {
        buyer: { nombre, telefono, email },
        items: carrito.map((producto) => ({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            quantity: producto.quantity,
        })),
        total: totalAPagar,
        };

  console.log(pedido);
  const db = getFirestore();
  const pedidos = collection(db, 'pedidos');

 
 
  addDoc(pedidos, pedido)
  .then((pedidoInsertado)=>{
 
   setPedidoInsertado(pedidoInsertado);
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
      <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="filled" severity="success">
      Gracias por su compra!. Revisa tu correo para obtener los datos de entrega. El numero de tu pedido es :  + { pedidoInsertado.id}. 
      {
    <Button color="inherit" size="small" >
      <Link className='link' to="/">  SEGUIR COMPRANDO</Link> 
    </Button>
   
     
  }

      </Alert>
    </Stack>
    ) : (
      <form onSubmit={validarForm}>  
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
                        <button
                        type='submit'
                        value='TERMINAR COMPRA'
                        className='btn'>
                        Terminar Compra
                    </button>

                    
                          </form>
                       

                           )}
          

                           </div>
                    )
               }
