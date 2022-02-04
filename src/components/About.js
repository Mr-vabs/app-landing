import React from 'react';

export default function About() {
  return (
    <section className="about" id="about">
      <h1 className="heading"> about the app </h1>
      <div className="column">
        <div className="image">
          <img src="images/about-img.png" alt="about-image" />
        </div>
        <div className="content">
          <h3>Easy And Perfect Solution For Your Business</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla placeat deserunt saepe repudiandae veniam soluta minima dolor hic aperiam iure.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, quaerat. Dolorem ratione saepe magni quo inventore porro ab voluptates eos, nam eius provident accusantium, quia similique est, repellendus et reiciendis.</p>
          <div className="buttons">
            <a href="#" className="btn"> <i className="fab fa-apple"></i> app store </a>
            <a href="#" className="btn"> <i className="fab fa-google-play"></i> google-play </a>
          </div>
        </div>
      </div>
    </section>
  );
}