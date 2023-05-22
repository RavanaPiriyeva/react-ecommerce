import React, { useContext, useState } from "react";
import "./order.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button, Paper, CircularProgress } from "@mui/material";
import { BasketContext } from "../../Pages/Basket/BasketContext";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 3,
};
const Order = () => {
  const { addToBasket, removeFromBasket, basketItems, total } =
    useContext(BasketContext);
  const [addAddres, setaddAddres] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addSave = () => {
    let arr =[]
    let order = {
      total: total(),
      count: basketItems.length,
      addres: addAddres,
    };
   
    handleClose();
    let orders = localStorage.getItem("orders");
   // localStorage.setItem("orders", JSON.stringify(arr))
    
      arr = JSON.parse(orders);
      arr.push(order)
      console.log(arr)
      localStorage.setItem("orders", JSON.stringify(arr))
  
  };
  return (
    <div>
      <div className="order" onClick={handleOpen}>
        Order
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form action="">
            <h4>Please insert cuurent addres .This is inportant</h4>
            <div className="input-item">
              <label htmlFor="title">Addres</label>
              <input
                id="title"
                type="text"
                placeholder="Addres"
                onChange={(e) => setaddAddres(e.target.value)}
              />
            </div>
          </form>
          <Button variant="contained" onClick={addSave}>
          Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Order;
