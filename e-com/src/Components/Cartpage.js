import React, { useState } from "react";
import axios from "axios";
import "../Css/cartpage.css";
import MpesaPopup from "../Pages/MpesaPopup";

const Cartpage = ({ cart, setCart }) => {
  const [showMpesaPopup, setShowMpesaPopup] = useState(false);
  const [orderData, setOrderData] = useState(null);

  const addItem = (index) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    setCart(newCart);
  };

  const removeItem = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
    } else {
      newCart.splice(index, 1);
    }
    setCart(newCart);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleBuy = async () => {
    try {
      const orderData = cart.map(item => ({
        product: item.name,
        quantity: item.quantity,
        total_price: item.price * item.quantity
      }));
      
      // Store the order data temporarily
      setOrderData(orderData);
      setShowMpesaPopup(true);

    } catch (error) {
      console.error('Error preparing order data:', error);
      alert('An error occurred while preparing order data. Please try again.');
    }
  };

  const closeMpesaPopup = () => {
    setShowMpesaPopup(false);
  };

  return (
    <div className="cartpage">
      <h1>My Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>KSH {item.price}</td>
                  <td>KSH {item.price * item.quantity}</td>
                  <td>
                    <button onClick={() => addItem(index)}>+</button>
                    <button onClick={() => removeItem(index)}>-</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total-price">
            <h2>Total: KSH {getTotalPrice()}</h2>
            <button className="buy-button" onClick={handleBuy}>
              Buy Now
            </button>
          </div>
        </>
      )}
      {showMpesaPopup && (
        <MpesaPopup onClose={closeMpesaPopup} amount={getTotalPrice()} orders={orderData} />
      )}
    </div>
  );
};

export default Cartpage;
