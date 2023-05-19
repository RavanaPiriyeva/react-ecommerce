import React ,{ useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import './navbar.css'
import { BasketContext } from '../../Pages/Basket/BasketContext';

const Navbar = () => {
  const { basketItems } = useContext(BasketContext);

  return (
    <div>   <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{backgroundColor:"black"}}>
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">   Products   </Link>
          </Typography>
          <Link to="/basket" ><Button color="inherit" className="basket"><p>{basketItems.length}</p><LocalMallIcon/></Button></Link>
          <Link to="/login" className='login'> <Button color="inherit">Login</Button></Link>

        </Toolbar>
      </AppBar>
    </Box></div>
  )
}

export default Navbar