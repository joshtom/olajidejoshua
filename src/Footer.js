import React, { Component } from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
    height: auto;
    position: absolute;
    bottom: 10px;;
    display: block;
    width: 100%;
    padding: 5px;
    background: transparent;
    
`
const SocialIcons = styled.div`
     text-align: center;
     color: #ffffff7a;
     font-size: 1.2rem;
     margin-left: 10px;
`
const FooterLink = {
    color: '#fff',
    marginLeft: '15px'
}

class Foot extends Component{
    render() {
        return(
            <div> 
             <Footer className="social-icons">
             <SocialIcons>
             <center>
            <a href="https://twitter.com/olatojoshua"  style={FooterLink}><i className="fa fa-twitter" ></i></a>
            <a href="https://github.com/joshtom/"   style={FooterLink}><i className="fa fa-github" ></i></a>
            <a href="https://www.linkedin.com/in/joshua-olajide-582457177/"  style={FooterLink}><i className="fa fa-linkedin" ></i></a>
            <a href="https://medium.com/@olajidejoshua4real"  style={FooterLink}><i className="fa fa-medium" ></i></a>
            </center>
            </SocialIcons>
            </Footer>
            </div>
        );
    }
}

export default Foot;