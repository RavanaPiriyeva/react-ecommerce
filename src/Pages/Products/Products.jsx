import Layout from "../../Components/Layout";
import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Products = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {

        loadData();

    }, [])
    const loadData = () => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setproducts(res.data);
            })
            .catch(err => {
                
            })
    }


  return (
   <div>  
    {
     
    }
    <Card sx={{ maxWidth: 345 }}>
   <CardMedia
     component="img"
     alt="green iguana"
     height="auto"
     image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
   />
   <CardContent>
     <Typography gutterBottom variant="h5" component="div">
       Lizard
     </Typography>
     <Typography variant="body2" color="text.secondary">
       Lizards are a widespread group of squamate reptiles, with over 6,000
       species, ranging across all continents except Antarctica
     </Typography>
   </CardContent>
   <CardActions>
     <Button size="small">Share</Button>
     <Button size="small">Learn More</Button>
   </CardActions>
 </Card></div>
  );
};

export default Products;
