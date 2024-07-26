import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import "../Css/styling.css";
import Scrollbutton from "../Components/Scrollbutton";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Fruits = ({ cart, setCart }) => {
  console.log('Cart:', cart);

  const [fruitProducts, setFruitProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFruitProducts = async () => {
      try {
        const response = await axios.get("http://localhost/sydney/fetchFruitProducts.php");
        console.log(response.data);

        if (Array.isArray(response.data)) {
          setFruitProducts(response.data);
        } else {
          console.error("Response data is not an array:", response.data);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching fruit products:", error);
        setLoading(false);
      }
    };

    fetchFruitProducts();
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
      <div className="Fruits-page">
        <div className="scroll-animation isVisible">
          <div className="Fruits-vertical"></div>
          <h1>
            DISCOVER OUR <span>FRESH</span> <br />
            FRUIT <span>PRODUCTS</span>
          </h1>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : fruitProducts.length === 0 ? (
          <p>No fruit products currently available.</p>
        ) : (
          <div className="Fruits-container">
            {fruitProducts.map((product) => (
              <div className="Fruits-item" key={product.id}>
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
      <ToastContainer />
    </div>
  );
};

Fruits.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};

Fruits.defaultProps = {
  cart: [],
};

export default Fruits;
