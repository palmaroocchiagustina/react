import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React from 'react';
import '../styles/CartWidget.css'


export default function CartWidget() {
  return (
    <div className='cart'>
        <button>
            <AddShoppingCartIcon />

        </button>
    </div>
  )
}
