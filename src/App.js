import React from 'react';
import logo from './logo.svg';
import './App.css';
import './lpage.css';
import {Animated} from 'react-animated-css';



function App() {
  return (
    
    <div>
    <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
    <span className="lpage-header animated shake"> Olajide Joshua. </span>
    </Animated>
    <span className="lpage-text">Javascript developer and lifelong learner.</span>
    <div className="btn-group">
        <button className="lpage-btn">About Me</button>
        <button className="lpage-btn" >Take A Tour</button>
    </div>
    </div>
    </div>
    <footer className="social-icons">
      <h3>Follow me on</h3> 
      <a href=""><i className="fa fa-twitter"></i></a>
      <a href=""><i className="fa fa-github"></i></a>
      <a href=""><i className="fa fa-linkedin"></i></a>
      <a href=""><i className="fa fa-google"></i></a>
    </footer>
    </div>
  );
}

export default App;
