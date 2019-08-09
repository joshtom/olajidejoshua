import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'


class Nav extends React.Component{
    render() {
        return(
            <div> 
                    <nav className="container">
                    <span className="nav-logo"><Link to="/">Joshua.</Link></span>
                    <section className="nav-links">
                        <Link to="/home">home</Link>
                        <Link to="/about">about</Link>
                        <Link to="/contact">contact</Link>
                        <Link to="/portfolio">portfolio</Link>
                    
                    </section>
                    </nav>

            </div>
        );
    }
}

export default Nav