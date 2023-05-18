import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Products from "./Pages/Products/Products";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
     
      <Layout>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Products />}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
