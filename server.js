
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/saveEdit', (req, resp, next) =>{
    let mail = req.body.mail
    console.log(mail)
    resp.json(mail)

})

app.listen(4000, () => console.log('Listening on 4000'))