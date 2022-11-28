import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import CartWidget from './CartWidget';
import { Link } from "react-router-dom";
import '../styles/appBar.css';
import '../styles/link.css';

const pages = [
  {label: "Inicio", link:"/"},
  {label: "Indumentaria", link:"/categoria/indumentaria"},
  {label: "Calzado", link:"/categoria/calzado"},
  {label: "Checkout", link:"/Checkout"},
];

export default function Navbar({color}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="static" className='appbar' style={{backgroundColor: color}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          <img className='logo__navbar' src='../img/logo.png'  width='90px' height='90px' alt='logonavbar'/>
      
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              
            >
          
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
     
              {pages.map((page) => (
                <MenuItem  key={page.label} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                  <Link className='menu__burguer' to={page.link}>{page.label}</Link>
                 </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           <Link className='link' to="/">CHILL OUT</Link> 
          
          </Typography>
          <Box className='appbar' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: 15 }}
              >
              <Link className='appbar' to={page.link}>{page.label}</Link>
               
              </Button>
            ))}
            </Box>
          <Box sx={{ flexGrow: 0 }}>
          
            <Link to='/cart'><CartWidget/></Link>
        

           </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

