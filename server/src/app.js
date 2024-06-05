const express = require('express');
const bodyParser = require('body-parser');
const cookeParser = require('cookie-parser')
const router = require('./controller/user.controller');
const cors = require('cors')
const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(cookeParser());
app.use(bodyParser.json());
app.use('/user', router)

app.use((er, req, res, _next) => res.send(er.message))


module.exports = { app }



