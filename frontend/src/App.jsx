import { useSelector } from "react-redux"
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'


function App() {
    const user = useSelector((state) => state.user.currentUser)
  return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:category" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/login" element={user ? <Navigate replace to="/"/> : <Login />}/>
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
