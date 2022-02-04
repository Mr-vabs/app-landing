import React from 'react';

export default function Review () {
  return (
    <section className="review" id="review">
      <h1 className="heading"> user's review </h1>
      <div className="box-container">
        <div className="box">
          <i className="fas fa-quote-left"></i>
          <div className="user">
            <img src="images/pic1.png" alt="user-pic" />
            <h3>Yumiko Singh</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <div className="comment">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus et, perspiciatis nisi tempore aspernatur accusantium sed distinctio facilis aperiam laborum autem earum repellat, commodi eum. Ullam cupiditate expedita officiis obcaecati?
            </div>
          </div>
        </div>
        <div className="box">
          <i className="fas fa-quote-left"></i>
          <div className="user">
            <img src="images/pic2.png" alt="user-pic" />
            <h3>Kitretsu Kasaudhan</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <div className="comment">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus et, perspiciatis nisi tempore aspernatur accusantium sed distinctio facilis aperiam laborum autem earum repellat, commodi eum. Ullam cupiditate expedita officiis obcaecati?
            </div>
          </div>
        </div>
        <div className="box">
          <i className="fas fa-quote-left"></i>
          <div className="user">
            <img src="images/pic3.png" alt="user-pic" />
            <h3>Naomi Gupta</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <div className="comment">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus et, perspiciatis nisi tempore aspernatur accusantium sed distinctio facilis aperiam laborum autem earum repellat, commodi eum. Ullam cupiditate expedita officiis obcaecati?
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}