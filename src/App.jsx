import Navbar from './components/Navbar';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlaceOrder from './pages/PlaceOrderPage';
import HomePage from './pages/HomePage';
import Cart from './pages/CartPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </Router>
  );
}

export default App;
