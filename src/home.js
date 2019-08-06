import React from 'react'
import Nav from './navbar'
import './home.css'
import { Link } from 'react-router-dom'
import Foot from './Footer'


class Home extends React.Component {
    render() {
    
 
        return(
            <div>
            <div className="h-page">
            <Nav />
            <div className="container  h-page-header">
            <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h1>Designer.</h1>
                <h1>Front End Engineer.</h1>
                <h1>Life Long Learner.</h1>
                <center><Link to="/about"><button className="h-page-btn">Learn More</button></Link></center>
            </div>
            </div>
            </div>
            </div>
            <Foot />
            </div>
        )
    }
}

export default Home