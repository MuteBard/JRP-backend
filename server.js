
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const secret = require('./secret');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mutemailer@gmail.com',
        pass: secret.password
    }
});

app.post('/saveEdit', (req, resp, next) =>{
    let mailDetails = req.body.mail

    console.log(mailDetails)
    var mailOptions = {
        from: mailDetails.name,      
        to: "johnathan.raymond07@gmail.com",
        subject: mailDetails.subject,
        text: mailDetails.message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            resp.json("failure")
        } else {
            console.log('Email sent: ' + info.response);
            resp.json("success")
        }
    })
})

app.listen(4000, () => console.log('Listening on 4000'))