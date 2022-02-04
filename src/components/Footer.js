import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      <div className="box-container">
        <div className="box">
          <h3>about us</h3>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet pariatur rerum consectetur architecto ad tempora blanditiis quo aliquid inventore a.
          </p>
        </div>
        <div className="box">
          <h3>quick links</h3>
          <a href="#">home</a>
          <a href="#features">features</a>
          <a href="#about">about</a>
          <a href="#signup">Sign up</a>
          <a href="#review">review</a>
          <a href="#pricing">pricing</a>
          <a href="#contact">contact</a>
        </div>
        <div className="box">
          <h3>follow us</h3>
          <a href="#">facebook</a>
          <a href="#">instagram</a>
          <a href="#">pinterest</a>
          <a href="#">twitter</a>
        </div>
        <div className="box">
          <h3>contact info</h3>
          <div className="info">
            <i className="fas fa-phone"></i>
            <p>
            +91 98765 43210 <br /> +91 98765 43210
            </p>
          </div>
          <div className="info">
            <i className="fas fa-envelope"></i>
            <p>
            email@gmail.com <br /> email@gmail.com
            </p>
          </div>
          <div className="info">
            <i className="fas fa-map-marker-alt"></i>
            <p>
            Naugarh, India - 272203
            </p>
          </div>
        </div>
      </div>
      <h1 className="credit"> images are free and download from web. <br /> this landing site made for assignment by vaibhav using react </h1>
    </div>
  );
}