import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'




function App() {
  return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:category" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* {user ? <Route path="/" element={<Home />} /> : <Route path="/login" element={<Login />} />} */}
            </Routes>
        </Router>
        // <Home />
        // <ProductList />
        // <ProductDetail />
  );
}

export default App;
