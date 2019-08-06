import React from 'react'
import Nav from './navbar'
import { Link } from 'react-router-dom'
import Foot from './Footer'
import styled from 'styled-components'

const HpageHeader = styled.div`
    text-align: center;
    font-family: 'Pompiere', cursive;
    font-weight: lighter;
    text-shadow: 3px 3px 3px rgba(red, 0.5);
    margin: auto;
    border: 2px solid blue;
    color: white;
`
const Container = styled.div`
    border: 1px solid red;
    height: 80vh;
    width: 100%;
    display: flex;
`
class Home extends React.Component {
    render() {
    if(this.props.location.pathname){
        document.body.style.background = 'linear-gradient(to right, rgb(168, 19, 49), rgb(168, 19, 49))';
    }
 
        return(
            <div>
            <div className="h-page">
            <Nav />
            <Container className="container">
            <div className="row m-auto">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <HpageHeader>
                <h1>Designer.</h1>
                <h1>Front End Engineer.</h1>
                <h1>Life Long Learner.</h1>
            </HpageHeader>
                <center><Link to="/about"><button className="h-page-btn">Learn More</button></Link></center>
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