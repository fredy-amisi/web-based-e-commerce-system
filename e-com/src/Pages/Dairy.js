import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import "../Css/styling.css";
import Scrollbutton from "../Components/Scrollbutton";
import Fruits from "./Fruits";
import { toast } from 'react-toastify'; 

const Dairy = ({ cart, setCart }) => {
  console.log('Cart:', cart);

  const [dairyProducts, setDairyProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDairyProducts = async () => {
      try {
        const response = await axios.get("http://localhost/sydney/fetchDairyProducts.php");
        console.log(response.data);

        if (Array.isArray(response.data)) {
          setDairyProducts(response.data);
        } else {
          console.error("Response data is not an array:", response.data);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching dairy products:", error);
        setLoading(false);
      }
    };

    fetchDairyProducts();
  }, []);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
      const newCart = [...cart];
      newCart[existingProductIndex].quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    
    // Notify user
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div>
      <div className="Dairy-page">
        <div className="scroll-animation isVisible">
          <div className="Dairy-vertical"></div>
          <h1>
            DISCOVER OUR <span>FRESH</span> <br />
            DAIRY <span>PRODUCTS</span>
          </h1>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : dairyProducts.length === 0 ? (
          <p>No dairy products currently available.</p>
        ) : (
          <div className="Dairy-container">
            {dairyProducts.map((product) => (
              <div className="Dairy-item" key={product.id}>
                <img
                  className="m-img"
                  src={`http://localhost/sydney/${product.image_path}`}
                  alt={product.name}
                />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="price">Price: KSH {product.price}</p>
                <button className="add-cart" onClick={() => addToCart(product)}>
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Scrollbutton />
      <Fruits cart={cart} setCart={setCart} />
    </div>
  );
};

Dairy.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

Dairy.defaultProps = {
  cart: [],
};

export default Dairy;
