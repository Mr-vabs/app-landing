import React from 'react';
import Header from './Header';
import Home from './Home';
import Features from './Features';
import About from './About';
import Signup from './Signup';
import Review from './Review';
import Price from './Price';
import Contact from './Contact';
import Footer from './Footer';
import './Style.css';

export default function Main() {
  return (
    <>
      <Header/>
      <Home/>
      <Features/>
      <About/>
      <Signup/>
      <Review/>
      <Price/>
      <Contact/>
      <Footer/>
    </>
  );
}
