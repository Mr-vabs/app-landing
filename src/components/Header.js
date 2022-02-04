import React from 'react';

export default function Header() {
  return (
    <header>
      <a href="#" className="logo"><span>Vabs</span>App</a>
      <input type="checkbox" id="menu-bar"/>
      <label for="menu-bar" className="fas fa-bars"></label>
      <nav className="navbar">
        <a href="#">home</a>
        <a href="#features">features</a>
        <a href="#about">about</a>
        <a href="#signup">Sign up</a>
        <a href="#review">review</a>
        <a href="#pricing">pricing</a>
        <a href="#contact">contact</a>
      </nav>
    </header>
  );
}