import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { contextoGeneral } from './ContextContainer';
import { Link } from 'react-router-dom';
import '../styles/appBar.css'


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CartWidget() {
 const {totalPrendas} = React.useContext(contextoGeneral)



  return (
    <IconButton style={{color: 'white'}} className='cart' aria-label="cart" >
      <StyledBadge  >
        <ShoppingCartIcon />
        <span>{totalPrendas()|| ''}</span>
        
      </StyledBadge>
    </IconButton>
  );
}













/*import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
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
*/