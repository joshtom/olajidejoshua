import React from 'react';
import Nav from './navbar'
// import { Link } from 'react-router-dom'
// import Foot from './Footer'
// import styled from 'styled-components'
import Container from './myComponents'

class About extends React.Component {
    render() {
        if(this.props.location.pathname){
            document.body.style.background = 'linear-gradient(to right, #000046, #1cb5e0)';
            document.body.style.color = 'white';
        }
        return(
            <div>
            <Nav />
            <Container className="container mt-5">
                <div className="row">
                    <div className="col-lg-10 col-md-12 col-sm-12">
                    <div>
                    <h1>  A little about me! </h1>
                    <article style={{fontSize: '1.3rem'}}>I am an experienced User Interface Designer, Javascript Developer, and Life Long Learner. I live a simple and optimistic life and I always put on a smiling face. When i am not in front of my computer, i'm either playing Game or playing piano and enjoying the Harmony. <br />
                        Over the past few years I've built products that solve real-life problems ranging from Businesses to companies with focus on creating fast, and accessible user experiences using advanced web technologies. I am currently a FrontEnd Engineer at LPIHUB, an innovative hub that offers services like Robotics, Linux Training & Certification and so much more. At lpihub I take both web classes and linux essentials.
                        <br />
                        I am passionate about web performance, Javascript applications, Great user experiences, and Open Source <b>#Linux</b>, and i'm also open for consulation, remote or contract work. 
                        <br /> <br />
                        <h3 style={{color:'yellow'}}> Available for full time job from [August 2019]. </h3>
                    </article>

                    </div>
                    </div>
                </div>
            </Container>
            
            </div>
        )
    }
}




export default About ;               