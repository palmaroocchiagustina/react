import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { contextoGeneral } from './ContextContainer';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CartWidget() {
  return (
    <IconButton aria-label="cart" color="secondary">
      <StyledBadge badgeContent={1} color="secondary">
        <ShoppingCartIcon />
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