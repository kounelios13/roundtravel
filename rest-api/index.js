var express = require('express')
var app = express()
var mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://exil33t:redrock1404~@cluster0-fdgjk.mongodb.net/test?retryWrites=true&w=majority');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));

var mongoKey = require('./env/keys').mongodb

app.get('/', (req,res)=>{
    res.send('eokreok')
})

require('./routes/tours')(app)



app.listen(9000,()=>{
    console.log('Api serving contente on port 9000');
})