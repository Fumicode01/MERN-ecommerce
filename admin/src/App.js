import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
//   const admin = useSelector((state) => state.user.currentUser.isAdmin);
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const admin = currentUser?.isAdmin;
  return (
    <Router>
        <Topbar />
        <div className="container">
        {!admin ? "": <Sidebar /> }
        
        <Routes>
            <Route path="/login" element={ admin ? <Navigate replace to="/" /> : <Login /> } />
            <Route path="/" element={ admin ? <Home /> : <Navigate replace to="/login" />} />
            <Route path="users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newuser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newproduct" element={<NewProduct />} />
            <Route path="*" element={<Navigate to="/" />}
    />
        </Routes>
        </div>
    </Router>
  );
}

export default App;