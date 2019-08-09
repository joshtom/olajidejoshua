import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Foot from './Footer'
import {Animated} from 'react-animated-css';
import styled from 'styled-components'

const btnStyle = {
    marginLeft: '20px'
}
const WhiteColor = styled.h1`
    color: white;
    font-weight: bolder;

    @media (max-width: 576px) {
    html { font-size: 0.85rem; }
}
`
const Container = {
     height: 'auto',
     marginTop:'150px'
}
const Text = styled.span`
    font-size:2em;
    color: rgba(255, 255, 255, 0.57);
    letter-spacing: 0.10em;
    display: block;

    @media (max-width: 576px) {
    html { font-size: 0.85rem; }
}
`
const Button = styled.button`
    padding: 1em 1.5em;
    background: #fff;
    border: none;
    font-family: 'Abel', sans-serif;
    font-weight: bolder;
    color: #2843AC;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1em;
    margin-top: 2em;
    transition: all 350ms ease-in-out;

    &:hover {
        background: rgba(0, 0, 0, .4);
        color: #fff;
    }
`

class Lpage extends React.Component {
    render() {
        if(this.props.location.pathname){
            document.body.style.background = 'linear-gradient(to right, rgba(0,0,0,.4), rgba(0,0,0,.8)), url("https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")';
            document.body.style.backgroundSize = "cover";
    
          }
        return(
            <div>
    <div className="lpage">
    <div className="container" style={Container}>
    <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
    <WhiteColor className="display-1"> Olajide Joshua. </WhiteColor>
    </Animated>
    <Text>Javascript developer and lifelong learner.</Text>
    <div className="btn-group">
        <Link to="/contact"><Button>Hire Me</Button> </Link>
        <Link to="/home"><Button style={btnStyle}>Take A Tour</Button></Link>
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
