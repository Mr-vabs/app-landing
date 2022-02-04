import React from 'react';

export default function Features() {
  return (
    <section className="features" id="features">
      <h1 className="heading"> app features </h1>
      <div className="box-container">
        <div className="box">
          <img src="images/f-icon1.png" alt="ui-image" />
          <h3>amazing UI</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam minus recusandae autem, repellendus fugit quaerat provident voluptatum non officiis ratione.</p>
          <a href="#" className="btn">read more</a>
        </div>
        <div className="box">
          <img src="images/f-icon2.png" alt="animation-image" />
          <h3>smooth animations</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam minus recusandae autem, repellendus fugit quaerat provident voluptatum non officiis ratione.</p>
          <a href="#" className="btn">read more</a>
        </div>
        <div className="box">
          <img src="images/f-icon3.png" alt="ux-image" />
          <h3>freindly user experience</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam minus recusandae autem, repellendus fugit quaerat provident voluptatum non officiis ratione.</p>
          <a href="#" className="btn">read more</a>
        </div>
      </div>
    </section>
  );
}