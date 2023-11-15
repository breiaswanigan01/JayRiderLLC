import { Route, Routes } from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import SellProducts from "./pages/SellProducts";
import ContactUs from "./pages/ContactUs";
import Checkout from "./pages/Checkout";
import "./App.css";

import Navbar from "./components/Navbar";
import Card from "./components/Card";
function App() {
  return (
    <>
      <div className="bg-gray-100">
        <Navbar />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sellproducts" element={<SellProducts />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
<Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
