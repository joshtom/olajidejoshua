// import swal from 'sweetalert';

const express = require('express'); //needed to launch server
const cors = require('cors'); //needed to disable sendgrid security
const sgMail = require('@sendgrid/mail'); //sendgrid library to send emails 

const app = express(); //alias from the express function

//sendgrid api key
sgMail.setApiKey('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');

app.use(cors()); //utilize Cors so the browser doesn't restrict data, without it Sendgrid will not send!

// Welcome page of the express server: 
// app.get('/', (req, res) => {
//     res.send("Welcome to the Sendgrid Emailing Server"); 
// });

app.get('/send-email', (req,res) => {
    
    //Get Variables from query string in the search bar
    const { recipient, sendermail, text, sendername } = req.query; 

    //Sendgrid Data Requirements
    const msg = {
        to: recipient,
        from: 'olajidejoshua4real@gmail.com',
        subject: 'Message From My Portfolio',
        text: text,
        html: `<div class="container mt-4">
        <div class="card">
          <div <div class="container" style="border: 1px solid rgba(0,0,0,.5); padding: 15px; border-radius: 5px; display: flex; margin-top: 10px; width: 50%; margin: auto;">
          <div class="card">
            <div class="card-head">
            </div>
            <div class="card-body">
              <p style="color: hsla(0, 0%, 50%, 0.90); display: inline-block; padding-right: 20px;"> ${sendermail} </p>
              <p style="color: hsla(0, 0%, 50%, 0.90); display: inline-block;">  ${sendername} </p>
              <p style="text-align: justify;">${text}</p>
            </div>
            <div class="card-footer" style="padding-top: 10px;">
              <a href="" target="_blank" rel="noopener" class="float-right text-grey" style="color:hsla(0, 0%, 50%, 2) !important; text-decoration: none;">Go to website</a>
            </div>
          </div>
        </div>`,
      };

    //Send Email
      sgMail.send(msg)
      .then((msg) => console.log("I hope that this is working"));
    
    
    
});

// to access server run 'nodemon index.js' then click here: http://localhost:4000/
app.listen(4000, () => console.log("Running on Port 4000")); 

