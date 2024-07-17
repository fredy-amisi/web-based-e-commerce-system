import React from 'react';
import "../Css/styling.css";
import Scrollbutton from "../Components/Scrollbutton";
import "../Css/ScrollAnimation.css";
import ScrollAnimation from '../Components/ScrollAnimation ';
import chickenBreast from '../Images/chickenBreast.jpeg';
import chickenThigh from '../Images/chickenThigh.jpeg';
import chickenWings from '../Images/chickenWings.jpeg';
import wholeChicken from '../Images/wholeChicken.jpeg';
import turkeyBreast from '../Images/turkeyBreast.jpeg';
import groundTurkey from '../Images/groundTurkey.jpeg';
import duckBreast from '../Images/duckBreast.jpeg';
import quail from '../Images/quail.jpeg';
import goose from '../Images/goose.jpeg';

const Poultry = ({ cart, setCart }) => {
  const products = [
    { id: 1, name: 'Chicken Breast', price: 200, image: chickenBreast, description: 'Enjoy the lean and tender taste of our premium chicken breast, perfect for grilling or baking.' },
    { id: 2, name: 'Chicken Thigh', price: 200, image: chickenThigh, description: 'Savor the juicy and flavorful taste of our chicken thighs, great for roasting or slow cooking.' },
    { id: 3, name: 'Chicken Wings', price: 200, image: chickenWings, description: 'Indulge in the crispy and delicious taste of our chicken wings, perfect for frying or baking.' },
    { id: 4, name: 'Whole Chicken', price: 200, image: wholeChicken, description: 'Experience the rich and full flavor of our whole chicken, ideal for roasting or grilling.' },
    { id: 5, name: 'Turkey Breast', price: 200, image: turkeyBreast, description: 'Relish the lean and savory taste of our turkey breast, perfect for sandwiches or roasting.' },
    { id: 6, name: 'Ground Turkey', price: 200, image: groundTurkey, description: 'Enjoy the versatile and healthy flavor of our ground turkey, great for tacos or burgers.' },
    { id: 7, name: 'Duck Breast', price: 200, image: duckBreast, description: 'Savor the rich and succulent taste of our duck breast, perfect for gourmet meals.' },
    { id: 8, name: 'Quail', price: 200, image: quail, description: 'Indulge in the delicate and flavorful taste of our quail, great for roasting or grilling.' },
    { id: 9, name: 'Goose', price: 200, image: goose, description: 'Experience the rich and robust flavor of our goose, ideal for festive meals.' }
  ];

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
      const newCart = [...cart];
      newCart[existingProductIndex].quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const { ref, isVisible } = ScrollAnimation();

  return (
    <div>
      <div className="Poultry-page">
        <div className={`scroll-animation ${isVisible ? 'isVisible' : ''}`} ref={ref}>
          <div className="Poultry-vertical"></div>
          <h1>DISCOVER OUR <span>PREMIUM</span> <br />POULTRY <span>SELECTION</span></h1>
        </div>
        <div className="Poultry-container">
          {products.map((product) => (
            <div className="Poultry-item" key={product.id}>
              <img className="m-img" src={product.image} alt={product.name} />
              <h3>{product.name.toUpperCase()}</h3>
              <p>{product.description}</p>
              <button className="add-cart" onClick={() => addToCart(product)}>Add To Cart</button>
            </div>
          ))}
        </div>
      </div>
      <Scrollbutton />
    </div>
  );
};

export default Poultry;
