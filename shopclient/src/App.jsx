import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";


const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Products/:category" element={<ProductList />}/>
        <Route path="/Product/:id" element={<Product />}/>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/success" element={<Success/> }/>
        <Route path="/Login" element={user ? <Navigate to="/"/> : <Login/>}/>
        <Route path="/Register" element={user ? <Navigate to="/"/> : <Register/>}/>
      </Routes>
    </Router>
  )
}

export default App;

