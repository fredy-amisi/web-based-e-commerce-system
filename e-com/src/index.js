import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
import Index from './Pages/Index';
import Navbar from './Components/Navbar';
import Fruits from './Pages/Fruits';
import Dairy from './Pages/Dairy';
import Vegetables from './Pages/Vegetables';
import Poultry from './Pages/Poultry';
import Footer from './Components/Footer';
import Cartpage from './Components/Cartpage';
import Signup from './Pages/Signup;';
import Login from './Pages/Login;';
import AdminDashboard from './Pages/AdminDashboard ';
import MpesaPopup from './Pages/MpesaPopup';


export default function App(){

  const [cart, setCart] = useState([]);
  return(

    <BrowserRouter>
    <Navbar cart={cart}/>
    <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/Index" element={<Index />} />
    <Route path="/Fruits" element={<Fruits/>} />
    <Route path="/Fruits" element={<Fruits/>} />
    <Route path="/Vegetables" element={<Vegetables/>} />
    <Route path="/Dairy" element={<Dairy cart={cart} setCart={setCart}/>} />
    <Route path="/Poultry" element={<Poultry cart={cart} setCart={setCart}/>} />
    <Route path="/Cartpage" element={<Cartpage cart={cart} setCart={setCart}/>} />
    <Route path="/Signup" element={<Signup/>} />
    <Route path="/MpesaPopup" element={<MpesaPopup/>} />
    <Route path="/Login" element={<Login/>} />
    <Route path="/AdminDashboard/*" element={<AdminDashboard/>} />

    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

