import React, { Component } from 'react'
import Nav from './navbar'
import Foot from './Footer'
import './contactStyle.css'

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = { 
                name: '',
                email: '', 
                message: '' 
            };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ 
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event) {    
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.message);
        event.preventDefault();
        const Name = this.state.name;
        const Email = this.state.name;
        const Message = this.state.name;

        // using Twilio SendGrid's v3 Node.js Library
        // https://github.com/sendgrid/sendgrid-nodejs
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
        to: 'olajidejoshua4real@gmail.com',
        from: 'olajidejoshua4real@gmail.com',
        subject: `Message From My Portfolio ${Name}, ${Email}`,
        text: `${Message}`,
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        };
        sgMail.send(msg);


    }
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
                        <h1 className="mb-3">contact</h1>
                        
                       <center><h4 className="text text-danger text-center text-bold" id="output"></h4></center>
                        <form className="d-block w-100" onSubmit={this.handleSubmit}>
                            
                            <input 
                            className="d-block w-100 c-input" 
                            type="text" placeholder="Your Name" 
                            value={this.state.name}
                            name="name" 
                            onChange={this.handleChange}
                            required="required"
                            />
                            <input className="d-block w-100 c-input" 
                            type="email" 
                            placeholder="Your Email" 
                            value={this.state.email}
                            name="email"  
                            onChange={this.handleChange}
                            required="required"
                            />
                            <textarea 
                            className="d-block w-100 c-input" 
                            name="message" 
                            value={this.state.message}
                            placeholder="Your Message" 
                            onChange={this.handleChange}
                            required="required"
                            ></textarea>
                            <p className="c-text">Please send urgent messages only.</p>
                            <button className="drop-btn" type="submit"> SHOOT ! </button> <span className="ama">Have a question? <a href="https://github.com/joshtom/ama">Ask me anything.</a></span>

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
