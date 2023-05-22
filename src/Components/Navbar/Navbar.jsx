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
import { LoginContext } from '../../Pages/Login/LoginContext';

const Navbar = () => {
  const { users,setUsers } = useContext(LoginContext);
  const { basketItems } = useContext(BasketContext);
  // const storedUsers = JSON.parse(localStorage.getItem('regiteruser'));
  const user = users.find(
    (user) => user.islogin === true
  );
  const logout=()=>{
    user.islogin=false
    setUsers([...users])
  }
  return (
    <div>   <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{backgroundColor:"black"}}>
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/products">   Products   </Link>
          </Typography>
          <Link to="/basket" ><Button color="inherit" className="basket"><p>{basketItems.length}</p><LocalMallIcon/></Button></Link>
          {
            user? <div style={{paddingLeft:40 ,textTransform:"uppercase"}}>{user.name}<Link to="/" className='login' onClick={logout}> <Button color="inherit">Logout</Button></Link></div> : <Link to="/" className='login'> <Button color="inherit">Login</Button></Link>

          }
         {/* <Link to="/login" className='login'> <Button color="inherit">Login</Button></Link> */}
        </Toolbar>
      </AppBar>
    </Box></div>
  )
}

export default Navbar