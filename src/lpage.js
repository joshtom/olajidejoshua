import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Foot from './Footer'
import {Animated} from 'react-animated-css';
import styled from 'styled-components'
import './lpage.css'

const btnStyle = {
    marginLeft: '20px'
}

const Container = {
     height: 'auto',
     marginTop:'150px'
}
const Text = styled.span`
    font-size:1.8em;
    color: rgba(255, 255, 255, .9);
    ${'' /* color: white; */}
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
    color: #1E150F;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1em;
    margin-top: 2em;
    transition: all 350ms ease-in-out;

    &:hover {
        background: rgba(0, 0, 0, .6);
        color: #fff;
        box-shadow: 1px 2px 5px 0 rgba(255,255,255,.5), 0 -1px 5px 0 white;
    }

    @media (max-width: 567px) {
        background: rgba(0, 0, 0, .6);
        color: #fff;
        box-shadow: 1px 2px 5px 0 rgba(255,255,255,.5), 0 -1px 5px 0 white
    }
`

class Lpage extends React.Component {
    render() {
        if(this.props.location.pathname){
            document.body.style.background = 'linear-gradient(to right, rgba(0,0,0,.4), rgba(0,0,0,.4)), url("https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")';
            document.body.style.backgroundSize = "cover";
            // document.body.style.backgroundPosition = "50% 50%";
            // document.body.style.backgroundRepeat = 'no-repeat';

            // const mobile = (value) => {
            //     if(value.matches) {
            //         document.body.style.background = 'linear-gradient(to right, #396afc, #2948ff)';
            //     } else {
            //         document.body.style.background = 'linear-gradient(to right, rgba(0,0,0,.4), rgba(0,0,0,.8)), url("https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")';
            //         document.body.style.backgroundSize = "cover";
            //     }
            // }
            // let value = window.matchMedia("(max-width: 567px)");
            // mobile(value);
            // value.addListener(mobile);
            
          }
        return(
            <div>
    <div className="lpage" style={{height: '94vh', border: '1px solid transparent'}}>
    <div className="container" style={Container}>
    <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
    <h1 className="lpage-header"> Hi. I'm Joshua,                                                </h1>
    </Animated>
    <Text className="lpage-text">I am a User-interface Designer, Javascript developer, and Lifelong learner.</Text>
    <div className="btn-group">
        <Link to="/contact"><Button>Hire Me</Button> </Link>
        <Link to="/home"><Button style={btnStyle}>Take A Tour</Button></Link>
    </div>
    </div>
    </div>
    </div>
   
    </div>
    <Foot/>
    </div>
        )
    }
}

export default Lpage
