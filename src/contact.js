import React, { Component } from 'react'
import Nav from './navbar'
import './contactStyle'



class Contact extends Component {
    render() {
        if(this.props.location.pathname){
            document.body.style.background = 'linear-gradient(to right, #141A26, #1cb5e0)';
            document.body.style.color = 'white';
        }
        return(
            <div>
            <Nav />
            <div className="container mt-5" style={{border: '1px solid red'}}>
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <h1>contact</h1>

                        <form className="d-block w-100" style={{border: '1px solid green'}}>
                            <input className="d-block w-100" type="text" placeholder="Your Name" id="name" />
                            <input className="d-block w-100" type="email" placeholder="Your Email" id="email" />
                            <textarea className="d-block w-100" id="message" placeholder="Your Message"></textarea>
                            <button className="drop-btn">Drop!</button>

                        </form>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Contact;