import React from "react";
import "../Css/styling.css";
import Scrollbutton from "../Components/Scrollbutton";
import "../Css/ScrollAnimation.css";
import ScrollAnimation from "../Components/ScrollAnimation ";
import carrot from '../Images/carrot.jpeg';
import broccoli from '../Images/broccoli.jpeg';
import spinach from '../Images/spinach.jpeg';
import tomato from '../Images/tomato.jpeg';
import cucumber from '../Images/cucumber.jpeg';
import bellPepper from '../Images/bellPepper.jpeg';
import lettuce from '../Images/lettuce.jpeg';
import cauliflower from '../Images/cauliflower.jpeg';
import zucchini from '../Images/zucchini.jpeg';

const Vegetables = () => {
  const { ref, isVisible } = ScrollAnimation();

  return (
    <div>
      <div className="Vegetables-page">
        <div className={`scroll-animation ${isVisible ? 'isVisible' : ''}`} ref={ref}>
          <div className="Vegetables-vertical"></div>
          <h1>DISCOVER OUR <span>FRESH</span> <br/>VEGETABLES <span>SELECTION</span></h1>
        </div>
        <div className="Vegetables-container">
          <div className="Vegetables-item">
            <img className="m-img" src={carrot} alt="carrot" />
            <h3>CARROTS</h3>
            <p>Enjoy the crisp and sweet taste of our fresh carrots, perfect for snacking or cooking.</p>
            <button className="add-cart">Add To Cart</button>
          </div>
          <div className="Vegetables-item">
            <img className="m-img" src={broccoli} alt="broccoli" />
            <h3>BROCCOLI</h3>
            <p>Relish the fresh and healthy flavor of our broccoli, great for steaming or stir-frying.</p>
            <button className="add-cart">Add To Cart</button>
          </div>
          <div className="Vegetables-item">
            <img className="m-img" src={spinach} alt="spinach" />
            <h3>SPINACH</h3>
            <p>Enjoy the nutrient-rich and fresh taste of our spinach, ideal for salads or cooking.</p>
            <button className="add-cart">Add To Cart</button>
          </div>
          <div className="Vegetables-item">
            <img className="m-img" src={tomato} alt="tomato" />
            <h3>TOMATOES</h3>
            <p>Enjoy the juicy and tangy taste of our fresh tomatoes, perfect for salads or sauces.</p>
            <button className="add-cart">Add To Cart</button>
          </div>
          <div className="Vegetables-item">
            <img className="m-img" src={cucumber} alt="cucumber" />
            <h3>CUCUMBERS</h3>
            <p>Indulge in the crisp and refreshing taste of our cucumbers, ideal for salads or snacking.</p>
            <button className="add-cart">Add To Cart</button>
          </div>
          <div className="Vegetables-item">
            <img className="m-img" src={bellPepper} alt="bell pepper" />
            <h3>BELL PEPPERS</h3>
            <p>Enjoy the sweet and crunchy taste of our fresh bell peppers, perfect for cooking or salads.</p>
            <button className="add-cart">Add To Cart</button>
          </div>
          <div className="Vegetables-item">
            <img className="m-img" src={lettuce} alt="lettuce" />
            <h3>LETTUCE</h3>
            <p>Stay refreshed with our crisp and fresh lettuce, great for salads and sandwiches.</p>
            <button className="add-cart">Add To Cart</button>
          </div>
          <div className="Vegetables-item">
            <img className="m-img" src={cauliflower} alt="cauliflower" />
            <h3>CAULIFLOWER</h3>
            <p>Enjoy the mild and fresh taste of our cauliflower, perfect for roasting or steaming.</p>
            <button className="add-cart">Add To Cart</button>
          </div>
          <div className="Vegetables-item">
            <img className="m-img" src={zucchini} alt="zucchini" />
            <h3>ZUCCHINI</h3>
            <p>Savor the tender and fresh taste of our zucchini, great for grilling or stir-frying.</p>
            <button className="add-cart">Add To Cart</button>
          </div>
        </div>
      </div>
      <Scrollbutton />
    </div>
  );
};

export default Vegetables;
