import React, { useContext, useState } from "react";
import "./order.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button, Paper, CircularProgress } from "@mui/material";
import { BasketContext } from "../../Pages/Basket/BasketContext";
import { OrderContext } from "./OrderContext";
import './order.css'
import { LoginContext } from "../../Pages/Login/LoginContext";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";
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
  const { orders, addOrder } = useContext(OrderContext);
  const { users, addUser } = useContext(LoginContext);
  const [addAddres, setaddAddres] = useState("");
  let navigate = useNavigate()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    if (!users.some((item) => item.islogin === true)) {
      navigate("/")
    }

  }
  const handleClose = () => setOpen(false);


  const addProductValidationSchema = Yup.object().shape({
    address: Yup.string()
      .required("Address doldurulmalıdır!"),

  });
  let user = users.find((item) => item.islogin === true)
  

  const formik = useFormik({
    initialValues: {
      address: "",
      total: total(),
      count: basketItems.length,
      user: user,
    },
    validationSchema: addProductValidationSchema,
    onSubmit: (values) => {
      handleClose()
      addOrder(values)
      console.log(values)
    },
  });


  const addSave = () => {
    handleClose()
    let order = {
      total: total(),
      count: basketItems.length,
      addres: addAddres,
    };
    addOrder(order)
  };
  return (
    <div className="order-box">
      <div className="order" onClick={handleOpen}>
        Order
      </div>
      <Modal
        open={users.some((item) => item.islogin === true) ? open : ''}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h4>Please insert cuurent addres .This is inportant</h4>
          <form onSubmit={formik.handleSubmit}>
            <>
              <div style={{ display: "flex", alignItems: "end", flexWrap: "wrap", padding: "20px 0" }}>
                <label htmlFor="address" style={{ minWidth: '150px', display: 'inline-block' }}>Address</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                  style={{ border: "none", width: 230, padding: 10, backgroundColor: "transparent", borderBottom: "1px solid gray", }}
                />
                <p style={{ color: "red" }}>{formik.errors?.address}</p>
              </div>
              <input type="submit" value="Submit" style={{ padding: "10px 50px", border: "none", color: "white", backgroundColor: "green", borderRadius: 5, margin: "20px auto", display: "block", cursor: "pointer" }} />
            </>
          </form>

        </Box>
      </Modal>
    </div>
  );
};

export default Order;
