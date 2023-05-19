import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Products from "./Pages/Products/Products";
import Login from "./Pages/Login/Login";
import Basket from "./Pages/Basket/Basket";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <>

      <Layout>
        <Routes>
          <Route path="/basket" element={<Basket />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Products />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
