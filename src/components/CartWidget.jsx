import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { contextoGeneral } from './ContextContainer';
import '../styles/appBar.css';


export default function CartWidget() {

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
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













