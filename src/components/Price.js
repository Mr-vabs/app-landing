import React from 'react';

export default function Price() {
  return (
    <section className="pricing" id="pricing">
      <h1 className="heading"> Our Pricing Plans </h1>
      <div className="box-container">
        <div className="box">
          <h3 className="title">basic</h3>
          <div className="price">INR 200<span>/monthly</span>
          </div>
          <ul>
            <li> <i className="fas fa-check"></i> 10000+ downloads </li>
            <li> <i className="fas fa-check"></i> basic server response </li>
            <li> <i className="fas fa-times"></i> unlimited storage </li>
            <li> <i className="fas fa-times"></i> our premium support </li>
          </ul>
          <a href="#" className="btn">Add in cart</a>
        </div>
        <div className="box">
          <h3 className="title">standard</h3>
          <div className="price">INR 400<span>/monthly</span>
          </div>
          <ul>
            <li> <i className="fas fa-check"></i> 10000+ downloads </li>
            <li> <i className="fas fa-check"></i> medium server response </li>
            <li> <i className="fas fa-check"></i> unlimited storage </li>
            <li> <i className="fas fa-times"></i> our premium support </li>
          </ul>
          <a href="#" className="btn">Add in cart</a>
        </div>
        <div className="box">
          <h3 className="title">premium</h3>
          <div className="price">INR 700<span>/monthly</span>
          </div>
          <ul>
            <li> <i className="fas fa-check"></i> 10000+ downloads </li>
            <li> <i className="fas fa-check"></i> excellent server response </li>
            <li> <i className="fas fa-check"></i> unlimited storage </li>
            <li> <i className="fas fa-check"></i> our premium support </li>
          </ul>
          <a href="#" className="btn">Add in cart</a>
        </div>
      </div>
    </section>
  );
}