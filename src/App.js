import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import SellProducts from './pages/SellProducts';
import ContactUs from './pages/ContactUs';
import Checkout from './pages/Checkout';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
   <>
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

   </>
  );
}

export default App;
