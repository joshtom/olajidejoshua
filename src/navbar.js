import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'


class Nav extends React.Component{
    render() {
        return(
            <div> 
                    <nav className="container">
                    <span className="nav-logo"><Link to="/">Joshua</Link></span>
                    <section className="nav-links">
                    
                        <Link to="/home">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Hire Me</Link>
                        <Link to="/portfolio">Portfolio</Link>
                    
                    </section>
                    </nav>

            </div>
        );
    }
}

export default Nav