import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Css/MpesaPopup.css';

const MpesaPopup = ({ onClose, amount, orders }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    // Initialize any data if needed
  }, [amount]);

  const handleSend = async () => {
    if (!phoneNumber) {
      alert('Phone number is missing');
      return;
    }

    try {
      const response = await axios.post('http://localhost/sydney/storeCartData.php', {
        amount: amount,
        phoneNumber: phoneNumber,
        orders: orders
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const result = response.data;
      console.log('Response from server:', result);
      if (result.success) {
        alert('Payment initiation was successful. ');
      } else {
        alert('Payment initiation failed. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
      console.error('Error:', error);
    }
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="mpesa">
          <h3>Enter Mpesa Details</h3>
        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            readOnly
            placeholder="Amount To Pay"
          />
        </div>
        <div className="input-container">
          <label htmlFor="phoneNumber">Sender's Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter Your Phone Number"
            required
          />
        </div>
        <button id="send" onClick={handleSend}>Send</button>
        <button id="Cancel" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default MpesaPopup;
