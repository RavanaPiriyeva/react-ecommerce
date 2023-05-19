import Layout from "../../Components/Layout";
import React, { useEffect, useState, useContext } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Grid } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import './products.css'
import { BasketContext } from "../Basket/BasketContext";

const Products = () => {
  const { addToBasket, removeFromBasket, basketItems } = useContext(BasketContext);
  // const isInBasket = basketItems.some((item) => item.id === product.id);

  const [products, setproducts] = useState([]);
  useEffect(() => {

    loadData();
    console.log(products)


  }, [])
  const loadData = () => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setproducts(res.data);
      })
      .catch(err => {

      })
  }

  const handleClick = (product) => {
    if (!basketItems.some((item) => item.id === product.id)) {
      addToBasket(product)
    }
    else (
      removeFromBasket(product)

    )
  }
  return (
    <div className='product'>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
          {products.map((product) => (
            <Grid item xs={3} style={{ padding: 20 }}>
              <Card sx={{ maxWidth: 345 }} style={{ height: '100%',  padding: 10 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="150px"
                  style={{ width: 200, margin: '0 auto', objectFit: "contain" }}
                  image={product.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",fontSize:18 }}>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.price}$
        </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" className={basketItems.some((item) => item.id === product.id) ? "remove-btn" : "add-btn"} onClick={() => handleClick(product)}>
                    {!basketItems.some((item) => item.id === product.id) ? <span className="btn-body">Add Basket <AddShoppingCartIcon style={{ paddingLeft: 10 }} /> </span> : <span className="btn-body">Remove Basket <RemoveShoppingCartIcon style={{ paddingLeft: 10 }} /> </span>}
                  </Button>
                </CardActions>
              </Card>
            </Grid>

          ))
          }
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
