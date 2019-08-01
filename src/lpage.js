import React from 'react';
import './lpage.css';
import {Link} from 'react-router-dom';
import {Animated} from 'react-animated-css';

const btnStyle = {
    marginLeft: '20px'
}
// const cBColor = {
//     backgroundColor: 'blue'
// }

class Lpage extends React.Component {
    render() {
        return(
            <div>
    <div className="lpageBody">
    <div className="container">
    <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
    <span className="lpage-header animated shake"> Olajide Joshua. </span>
    </Animated>
    <span className="lpage-text">Javascript developer and lifelong learner.</span>
    <div className="btn-group">
        <Link to="/about"><button className="lpage-btn">About Me</button></Link>
        <Link to="/home"><button style={btnStyle} className="lpage-btn" >Take A Tour</button></Link>
    </div>
    </div>
    </div>
    </div>
    <footer className="social-icons">
      <h3>Follow me on</h3> 
      <a href="https://twitter.com"><i className="fa fa-twitter"></i></a>
      <a href="https://github.com"><i className="fa fa-github"></i></a>
      <a href="https://linkedin.com"><i className="fa fa-linkedin"></i></a>
      <a href="https://google.com"><i className="fa fa-google"></i></a>
    </footer>
    </div>
    </div>
        )
    }
}

export default Lpage
