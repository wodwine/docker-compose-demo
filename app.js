var mongoose = require('mongoose')
var express = require('express')
var app = express()
var port = 9000

// run locally
//mongoose.connect('mongodb://node:node@localhost:27017/admin')

// run with docker-compose
mongoose.connect('mongodb://node:node@mongodb:27017/admin')
var db = mongoose.connection

var book = db.useDb('store')
var bookSchema = mongoose.Schema({
  name:{type:String,required:true},
  price:{type:Number,required:true},
});
var Book = book.model('books',bookSchema)

app.get('/' , function (req , res) {
 Book.find({}).then(function (books) {
 	res.send(books)
 })
})

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)