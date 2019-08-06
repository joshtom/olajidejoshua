import React from 'react'
import './lpage.css'


class Foot extends React.Component{
    render() {
        return(
            <div> 
             <footer className="social-icons">
            <h3>Follow me on</h3> 
            <a href="https://twitter.com"><i className="fa fa-twitter"></i></a>
            <a href="https://github.com"><i className="fa fa-github"></i></a>
            <a href="https://linkedin.com"><i className="fa fa-linkedin"></i></a>
            <a href="https://google.com"><i className="fa fa-google"></i></a>
            </footer>
            </div>
        );
    }
}

export default Foot;