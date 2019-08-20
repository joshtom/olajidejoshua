import React from 'react'
import Nav from './navbar'
import { Link } from 'react-router-dom'
import Foot from './Footer'
import styled from 'styled-components'

const HpageHeader = styled.h1`
    text-align: center;
    font-family: 'Oswald', sans-serif;
    font-weight: lighter;
    text-shadow: 3px 3px 3px rgba(red, 0.5);
    margin: auto;
    ${'' /* border: 2px solid blue; */}
    color: white;
`

const Container = styled.div`
    height: 60vh;
    width: 100%;
    display: flex;
`
const Button = styled.button`
    padding-left: 2em;
    padding-right: 2em;
    padding-top: .8em;
    padding-bottom: .8em;
    background: #401616;
    border: none;
    border-radius:10px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    transition: 200ms ease-in-out;

    &:hover{
        border-radius: 0px;
        color: #eee;
        padding-right: 10px;
    }
`

const Restext = styled.div`
    
    font-size: 2em;
    margin-bottom: .5em;
     @media (max-width: 567px) {
        font-size: 1.2em;
    }
`
const Text = styled.p`
    font-weight: lighter;
    color: white;

    @media (max-width: 567px) {
        font-size: .4em;
    }
`
class Home extends React.Component {
    render() {
    if(this.props.location.pathname){
        document.body.style.background = 'linear-gradient(to right, #1e130c, #9a8478)';
    }
 
        return(
            <div>
            <div className="h-page" style={{height: 'auto', position: 'relative'}}>
            <Nav />
            <Container className="container">
            <div className="row m-auto">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <HpageHeader>
                <Restext>Not Your Average Software Engineer. </Restext>
                <Text style={{fontWeight: 'lighter'}}>Get ready to turn your <i>imaginations</i> into <i>reality</i> <i className="fa fa-smile-o"></i></Text>
            </HpageHeader>
                <center><Link to="/about"><Button>Take a Step Further  <i className="fa fa-step-forward"></i></Button></Link></center>
            </div>
            </div>
            </Container>
            </div>
            <Foot />
            </div>
        )
    }
}

export default Home