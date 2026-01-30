import Navbar from './components/Navbar';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlaceOrder from './pages/PlaceOrderPage';
import HomePage from './pages/HomePage';
import Cart from './pages/CartPage';
import Footer from './components/Footer';
import LoginPopup from './components/LoginPopup';


function App() {

const [showLogin, setShowLogin] = useState(false)

  const [count, setCount] = useState(0);

  return (
    <Router>
      {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
