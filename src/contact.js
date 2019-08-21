import React, { Component } from 'react'
import Nav from './navbar'
import Foot from './Footer'
import './contactStyle.css'
import swal from 'sweetalert';



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
        const recepient = "olajidejoshua4real@gmail.com"
        let Name = this.state.name;
       let Email = this.state.email;
        let Message = this.state.message;

        fetch(`http://127.0.0.1:4000/send-email?recipient=${recepient}&sendermail=${Email}&text=${Message}&sendername=${Name}`)
        .catch(e => console.error(e))   
        swal("Success!", "Your email has been sent, I will get back to you soon.", "success");  
        this.setState({
            name: '',
            email: '',
            message: ''
        })
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    }
    render() {
        if(this.props.location.pathname){
            document.body.style.background = 'linear-gradient(to right,#141A26, #141A26)';
            document.body.style.color = 'white';
        }
        return(
            <div>
            <div style={{height: '95vh', position: 'relative'}}>
            <Nav />
            <div className="container mt-5 p-2">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <h1 className="mb-3">contact</h1>
                        
                       <center><span className="text text-danger text-center text-bold" id="output"></span></center>
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
            </div>
        )
    }
}

export default Contact;
