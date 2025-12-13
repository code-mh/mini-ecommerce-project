import './App.css';
import Footer from './components/Footer';
import Header from './components/header';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify'
import Cart from './pages/Cart';

function App() {

  const [cartItems,setCartItems] = useState([]);

  return (
    <div className="App">
        <BrowserRouter>
            <div>
                <ToastContainer theme="dark" position="top-center"/>
                <Header cartItems={cartItems}/>
                <Routes>
                  <Route path={"/"} element={<Home/>} />
                  <Route path={"/search"} element={<Home/>} />
                  <Route path="/product/:id" element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems} />} />
                  <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
