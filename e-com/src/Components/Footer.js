  import React from 'react';

  const Footer = () => {
    return (
      <>
      <footer>
        <div className="dylan">
          <h1 className="Wangilah">Fresh agricultural products online, connecting farms to consumers.</h1>
        </div>
        <div className="Copyright">
        <p className="Copyright">@Copyright - All Rights Reserved. Designed by Dylan <br/> 0113918190</p>
        </div>
        <div className="follow">
          <h1>Follow us</h1>
          <div className="follow-h3">
          <h3>Facebook</h3>
          <h3>Linkedin</h3>
          <h3>Twitter</h3>
          <h3>Github</h3>
          </div>
        </div>
        <div className="links">
          <h1>Quick Links</h1>
          <div className="links-div">
          <a href="/Signup"><h3>Get Started</h3></a>
          <a href="/Login"><h3>Login In</h3></a>
          <a href="/Booking"><h3>Book Now</h3></a>
          <a href="/Team"><h3>Our Team</h3></a>
          <a href="/Courses"><h3>Our services</h3></a>
          <a href="/Contact"><h3>Contact Us</h3></a>
          </div>
          </div>
        
      </footer>
      </>
    );
  };

  export default Footer;
