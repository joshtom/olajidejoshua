import React, { Component } from 'react'
import PNav from './PNav.js'
// import Foot from './Footer'
import './portStyle.css'
import styled from 'styled-components';

const Purple = styled.span`
    color: purple;
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
            <div className="container mt-4">
            <div className="row mb">
            
                <div className="col-lg-8 col-md-8 col-sm-12">
                    <div className="p-content">
                    <h3>I <strong>design</strong> and <strong>build</strong> web applications</h3>
                    {/* <h4>Below are few of what i have worked on to view more visit <a href="https://github.com/joshtom" target="_blank" rel="noopener">https://github.com/joshtom</a></h4> */}
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis molestias cupiditate nesciunt, similique labore fugiat facere voluptatem! Minus vero laborum, doloremque culpa ipsa veritatis consectetur rerum quo sit quam vitae.
                    </p>
                    </div>
                </div>
                <div className="col-lg-5 col-md-4 col-sm-12">
                    <div className="p-img">
                    <img src="https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                    </div>
                </div>
            </div>
                    <hr />
            <div className="row m-auto ">
            <div className="col-lg-7 col-md-8 col-sm-12 d-flex">
                <div className="p-content m-auto">
                <h4>DevAlert</h4>
                <p><Purple>Design </Purple> | <Crimson> Front-End Development </Crimson>| <Dark>Digital-Marketing </Dark></p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis molestias cupiditate nesciunt, similique labore fugiat facere voluptatem! Minus vero laborum, doloremque culpa ipsa veritatis consectetur rerum quo sit quam vitae.
                </p>
                </div>
            </div>
            <div className="col-lg-5 col-md-4 col-sm-12">
                <div className="p-img">
                <img src="https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                </div>
            </div>
            
            
        </div>
        <hr />
            <div className="row m-auto ">
            <div className="col-lg-7 col-md-8 col-sm-12 d-flex">
                <div className="p-content m-auto">
                <h4>DevAlert</h4>
                <p><Purple>Design </Purple> | <Crimson> Front-End Development </Crimson>| <Dark>Digital-Marketing </Dark></p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis molestias cupiditate nesciunt, similique labore fugiat facere voluptatem! Minus vero laborum, doloremque culpa ipsa veritatis consectetur rerum quo sit quam vitae.
                </p>
                </div>
            </div>
            <div className="col-lg-5 col-md-4 col-sm-12">
                <div className="p-img">
                <img src="https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                </div>
            </div>
            
            
        </div>
        <hr />
        <article> To view more Projects, Check my <a href="https://github.com/joshtom?tab=repositories" rel="noopener noreferrer" target="_blank" title="https://github.com/joshtom?tab=repositories">Github</a> </article>
            </div>
            </div>
            <div> 
      
             <center>
            <a href="https://twitter.com/olatojoshua" target="_blank" rel="noopener" ><i className="fa fa-twitter" ></i></a>
            <a href="https://github.com/joshtom/" target="_blank" rel="noopener" ><i className="fa fa-github" ></i></a>
            <a href="https://www.linkedin.com/in/joshua-olajide-582457177/" target="_blank" rel="noopener"><i className="fa fa-linkedin" ></i></a>
            <a href="https://medium.com/@olajidejoshua4real" target="_blank" rel="noopener"><i className="fa fa-medium" ></i></a>
            </center>
            </div>
            </div>
        )
    }
}

export default Portfolio;
