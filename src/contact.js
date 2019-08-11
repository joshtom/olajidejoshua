import React, { Component } from 'react'
import Nav from './navbar'
import Foot from './Footer'
import './contactStyle.css'



class Contact extends Component {
    render() {
        if(this.props.location.pathname){
            document.body.style.background = 'linear-gradient(to right,#141A26, #141A26)';
            document.body.style.color = 'white';
        }
        return(
            <div>
            <Nav />
            <div className="container mt-5 p-2 mb-4">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <h1 className="mb-5">contact</h1>
                        

                        <form className="d-block w-100" >
                            <input className="d-block w-100 c-input" type="text" placeholder="Your Name" id="name" />
                            <input className="d-block w-100 c-input" type="email" placeholder="Your Email" id="email" />
                            <textarea className="d-block w-100 c-input" id="message" placeholder="Your Message"></textarea>
                            <p className="c-text">Please send urgent messages only.</p>
                            <button className="drop-btn" > SHOOT ! </button> <span className="ama">Have a question? <a href="https://github.com/joshtom/ama">Ask me anything.</a></span>

                        </form>
                    </div>
                </div>
            </div>
            <Foot />
            </div>
        )
    }
}

export default Contact;
