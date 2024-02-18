// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import SignUp from "./views/SignUp";
import LogIn from "./views/LogIn";
import Account from "./views/Account";
import CartPage from "./views/CartPage";
import React, { useState } from "react";

import "./App.css";
import TopNav from "./components/TopNav";

function App() {
  const [cart, setCart] = useState({});
  const [page, setPage] = useState("home");

  // hashMap = {1: {qunt: 3, name: "apple", price: 100, id: 1},  2: {qunt: 3, name: "apple", price:1,}}

  return (
    <div className="App">
      <TopNav setPage={setPage} setCart={setCart}/>
      { page === "home" && <HomePage cart={cart} setCart={setCart} setPage={setPage} />} 
      { page === "cart" && <CartPage cart={cart} />}


      {/* //   {
    //     // <Router>
    //     //   <Routes>
    //     //     <Route path="/" element={<HomePage cart={cart} setCart={setCart} />} />
    //     //     <Route path="/signup" element={<SignUp />} />
    //     //     <Route path="/login" element={<LogIn />} />
    //     //     <Route path="/account" element={<Account />} />
    //     //     <Route path="/cart" element={<CartPage cart={cart} />} />
    //     //   </Routes>
    //     // </Router>
    //   } */}

    
    </div>
  );
}

export default App;
