const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
var path = require('path');
const db = require('./db')
var sh = require("shelljs");
var cwd = sh.pwd();

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.sendFile(path.join(cwd + '/pages/index.html'));
})

app.listen(apiPort, () => console.log('Server running on port 3000'))