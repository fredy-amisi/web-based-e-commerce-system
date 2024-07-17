import React from "react";
import "../Css/styling.css";
import Scrollbutton from "../Components/Scrollbutton";
import "../Css/ScrollAnimation.css";
import ScrollAnimation from "../Components/ScrollAnimation ";
import apple from '../Images/apple.jpeg';
import banana from '../Images/banana.jpeg';
import orange from '../Images/orange.jpeg';
import grape from '../Images/grape.jpeg';
import mango from '../Images/mango.jpeg';
import strawberry from '../Images/strawberry.jpeg';
import watermelon from '../Images/watermelon.jpeg';
import pineapple from '../Images/pineapple.jpeg';
import kiwi from '../Images/kiwi.jpeg';

const Fruits = () => {
  const { ref, isVisible } = ScrollAnimation();

  return (
    <div>
      <div className="Fruits-page">
        <div className={`scroll-animation ${isVisible ? 'isVisible' : ''}`} ref={ref}>
          <div className="Fruits-vertical"></div>
          <h1>DISCOVER OUR <span>FRESH</span> <br/>FRUITS <span>SELECTION</span></h1>
        </div>
        <div className="Fruits-container">
          <div className="Fruits-item">
            <img className="m-img" src={apple} alt="apple" />
            <h3>APPLES</h3>
            <p>Enjoy the crisp and juicy taste of our fresh apples, sourced from local orchards.</p>
            <button className="add-cart">Add To Cart</button>
          </div>
          <div className="Fruits-item">
            <img className="m-img" src={banana} alt="banana" />
            <h3>BANANAS</h3>
            <p>Relish the sweet and creamy flavor of our ripe bananas, perfect for a healthy snack.</p>
            <button className="add-cart">Add To Cart</button>
          </div>
          <div className="Fruits-item">
            <img className="m-img" src={orange} alt="orange" />
            <h3>ORANGES</h3>
            <p>Enjoy the tangy and refreshing taste of our fresh oranges, full of vitamin C.</p>
            <button className="add-cart">Add To Cart</button>
          </div>
          <div className="Fruits-item">
            <img className="m-img" src={grape} alt="grape" />
            <h3>GRAPES</h3>
            <p>Savor the sweet and juicy taste of our fresh grapes, perfect for snacking or adding to salads.</p>
            <button className="add-cart">Add To Cart</button>
          </div>
          <div className="Fruits-item">
            <img className="m-img" src={mango} alt="mango" />
            <h3>MANGOES</h3>
            <p>Indulge in the rich and sweet flavor of our fresh mangoes, a tropical delight.</p>
            <button className="add-cart">Add To Cart</button>
          </div>
          <div className="Fruits-item">
            <img className="m-img" src={strawberry} alt="strawberry" />
            <h3>STRAWBERRIES</h3>
            <p>Enjoy the sweet and tangy taste of our fresh strawberries, perfect for desserts or snacking.</p>
            <button className="add-cart">Add To Cart</button>
          </div>
          <div className="Fruits-item">
            <img className="m-img" src={watermelon} alt="watermelon" />
            <h3>WATERMELON</h3>
            <p>Stay refreshed with our juicy and sweet watermelons, perfect for hot days.</p>
            <button className="add-cart">Add To Cart</button>
          </div>
          <div className="Fruits-item">
            <img className="m-img" src={pineapple} alt="pineapple" />
            <h3>PINEAPPLE</h3>
            <p>Enjoy the tropical and tangy flavor of our fresh pineapples, perfect for smoothies or snacking.</p>
            <button className="add-cart">Add To Cart</button>
          </div>
          <div className="Fruits-item">
            <img className="m-img" src={kiwi} alt="kiwi" />
            <h3>KIWI</h3>
            <p>Savor the unique and tangy taste of our fresh kiwis, packed with nutrients and flavor.</p>
            <button className="add-cart">Add To Cart</button>
          </div>
        </div>
      </div>
      <Scrollbutton />
    </div>
  );
};

export default Fruits;
