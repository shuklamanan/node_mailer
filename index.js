var nodemailer = require('nodemailer');
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
var jsonParser = bodyParser.json()

let PORT = 8000;

app.post("/", jsonParser,(req, res) => {
  // console.log(req.body.email);
    let mail = req.body.email;
    let item = req.body.item;
    let cat = req.body.type;
    console.log(cat + " "+  item + " " + mail);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'Your email',
          pass: 'Your Password'
        }
    });
    
    var mailOptions = {
        from: 'sender mail',
        to: mail,  // receiver  mail
        subject: 'Subject of mail',
        text: `description of mail`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.send("I am a server");
  });
  const start = async () => {
    try {
      app.listen(PORT, () => {
        console.log(`I am live in port no.  ${PORT}`);
      });
    } catch (error) {}
  };
  
  start();