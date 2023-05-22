import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Products from "./Pages/Products/Products";
import Login from "./Pages/Login/Login";
import Basket from "./Pages/Basket/Basket";
import Register from "./Pages/Register/Register";
import Private from "./Admin/Pages/Private";
import Public from "./Admin/Pages/Public";
import { useContext } from "react";
import { LoginContext } from "./Pages/Login/LoginContext";

function App() {
  const { users, addUser } = useContext(LoginContext);

  // const storedUsers = JSON.parse(localStorage.getItem('regiteruser'));
  const user = users.find(
    (user) => user.islogin === true
  );
  return (
    <>
{
  user ? <Private/>:<Public/>
}
    </>
  );
}

export default App;
