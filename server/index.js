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
    res.sendFile(path.join(cwd + '/pages/Patient.Doctor selection.html'));
})


app.get('/doctor', (req, res) => {
    res.sendFile(path.join(cwd + '/pages/Doctor Selection.html'));
})

app.get('/doctor/:id', (req, res) => {
	var id = req.params.id;
	console.log("Doctor "+ id + " is in session")
    res.sendFile(path.join(cwd + '/pages/Doctor Webpage.html'));
})

app.get('/patient', (req, res) => {
    res.sendFile(path.join(cwd + '/pages/Patient Selection.html'));
})

app.get('/patient/:id', (req, res) => {
	var id = req.params.id;
	console.log("Patient "+id+" is in session")
    res.sendFile(path.join(cwd + '/pages/Patient Webpage.html'));
})

app.get('/thanks', (req, res) => {
    res.sendFile(path.join(cwd + '/pages/thanks.html'));
})

app.listen(apiPort, () => console.log('Server running on port 3000'))
