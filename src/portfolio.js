import React, { Component } from 'react'
import PNav from './PNav.js'
// import Foot from './Footer'
import './portStyle.css'
import styled from 'styled-components';
import devalert from './devalert.png';
import connectfour from './connectfour.png'
import dew from './dewimage.png'

const Purple = styled.span`
    color: #6E62FE;
    font-weight: bold;
`
const Crimson = styled.span`
    color: crimson;
    font-weight: bold;
`
const Dark = styled.span`
    color: black;
    font-weight: bold;
`
const Green = styled.span`
    color: #60D07E;
    font-weight: bold;
`
const Grey = styled.span`
    color: #2A3347;
    font-weight: bold;
`





class Portfolio extends Component {
    render() {
        if(this.props.location.pathname){
            document.body.style.background = 'linear-gradient(to right,white, white)';
            document.body.style.padding = '20px';
            document.body.style.color = 'black';
        }
        return(
            <div>
            <PNav/>
            <div className="portfolio">
            <div className="container">
            <div className="row mb">
            
                <div className="col-lg-8 col-md-8 col-sm-12">
                    <div className="p-content">
                    <h3>I <strong>design</strong> and <strong>build</strong> web applications</h3>
                    {/* <h4>Below are few of what i have worked on to view more visit <a href="https://github.com/joshtom" >https://github.com/joshtom</a></h4> */}
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    {/* <div className="p-img">
                    
                    </div> */}
                    <i className="fa fa-briefcase float-right"></i>
                </div>
            </div>
            <div className="row m-auto mb-2">
            
                <div className="col-lg-7 col-md-8 col-sm-12 d-flex">
                    <div className="p-content m-auto">
                    <h4>DevAlert</h4>
                    <p><Purple>Design </Purple> | <Crimson> Front-End Development </Crimson>| <Dark>Digital-Marketing </Dark></p>
                    <p>
                       DevAlert is an app that connects developers around the world with employers out there. But you may be wondering that there are other apps out there that does this same thing like, linkedin, jobberman and all sort. What makes this app stand out is that once a developer registers they will be linked with someone that offers mentorship and more. I worked remotely as a front-End engineer in building this app. <br />
                       <a href="https://devalert.me">Go to App</a>
                    </p>
                    </div>
                </div>
                <div className="col-lg-5 col-md-4 col-sm-12">
                    <div className="p-img">
                    <img src={devalert} alt="Logo"/>
                    </div>
                </div>
            </div>
                    <hr />
            <div className="row m-auto ">
            <div className="col-lg-7 col-md-8 col-sm-12 d-flex">
                <div className="p-content m-auto">
                <h4>Dew Network</h4>
                <p><Purple>Design </Purple> | <Crimson> Front-End Development </Crimson>| <Dark>SEO</Dark></p>
                <p> Dew Network is a three-month  program that empowers students most expecially undergraduates to have the most demanded skill in the industry by learning the latest technologies.
                    <br />
                    <a href="http://dew.com.ng"  title="http://dew.com.ng" >Go to app</a>
                </p>
                </div>
            </div>
            <div className="col-lg-5 col-md-4 col-sm-12">
                <div className="p-img">
                <img src={dew} alt="Dew-logo"/>
                </div>
            </div>
            
            
        </div>
        <hr />
            <div className="row m-auto ">
            <div className="col-lg-7 col-md-8 col-sm-12 d-flex">
                <div className="p-content m-auto">
                <h4>CONNECT FOUR GAME</h4>
                <p><Green>Design </Green> | <Crimson> Front-End Development </Crimson>| <Grey> User Interaction </Grey></p>
                <p>
                    Connect four is a hobby Project i worked on to take my javascript skills to the next level. The interface is built with SVG and CSS. To have a better User Experience, open the app on your system and on a chrome browser. *no support for mobile devices*
                    <br />
                    <a href="https://joshtom.github.io/connect-four-game/"  title="https://joshtom.github.io/connect-four-game/"> Click to play </a>
                </p>
                </div>
            </div>
            <div className="col-lg-5 col-md-4 col-sm-12">
                <div className="p-img">
                <img src={connectfour} alt="connectFour-logo"/>
                </div>
            </div>
            
            
        </div>
        <hr />
        <article> To view more Projects, Check my <a href="https://github.com/joshtom?tab=repositories"  title="https://github.com/joshtom?tab=repositories">Github</a> </article>
            </div>
            </div>
            <div className="mt-4"> 
      
             <center>
            <a href="https://twitter.com/olatojoshua"  className="ml-2 text-dark"><i className="fa fa-twitter" ></i></a>
            <a href="https://github.com/joshtom/"  className="ml-2 text-dark"><i className="fa fa-github"></i></a>
            <a href="https://www.linkedin.com/in/joshua-olajide-582457177/"  className="ml-2 text-dark"><i className="fa fa-linkedin" ></i></a>
            <a href="https://medium.com/@olajidejoshua4real"  className="ml-2 text-dark"><i className="fa fa-medium" ></i></a>
            </center>
            </div>
            </div>
        )
    }
}

export default Portfolio;
