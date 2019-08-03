import React from 'react';
import './App.css';
import './lpage.css';
import {Link} from 'react-router-dom';
import Foot from './Footer'
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
    <div className="lpage">
    <div className="container">
    <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
    <span className="lpage-header animated shake"> Olajide Joshua. </span>
    </Animated>
    <span className="lpage-text">Javascript developer and lifelong learner.</span>
    <div className="btn-group">
        <Link to="/contact"><button className="lpage-btn">Hire Me</button></Link>
        <Link to="/home"><button style={btnStyle} className="lpage-btn" >Take A Tour</button></Link>
    </div>
    </div>
    </div>
    </div>
    <Foot/>
    </div>
    </div>
        )
    }
}

export default Lpage
