import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Navbar = styled.nav`
    border: 1px solid transparent;
    padding: 25px;
    width: 100%;
    display: flex;
`
class Nav extends React.Component{
    render() {
        return(
            <div> 
                    <Nav className="container">
                    <span className="nav-logo"><Link to="/">Joshua</Link></span>
                    <section className="nav-links">
                    
                        <Link to="/home">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Hire Me</Link>
                        <Link to="/portfolio">Portfolio</Link>
                    
                    </section>
                    </Nav>

            </div>
        );
    }
}

export default Nav