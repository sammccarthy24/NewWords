var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var Nedb = require('nedb')

var database = new Nedb({filename:'./data/data.db', autoload:true})

app.use(express.static('../client'))

app.use(bodyParser.json())

app.post('/saveCurrent', function (req, res) {
	var data = {word: req.body.word, date: Date.now()}
	
	var done = function () {
		console.log("I ust wrote something to the database")
		res.end("done")
	}
	
	database.insert(data, done)
})

app.listen(8080)