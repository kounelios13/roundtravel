const Tour = require('./mongo-schemas/Tour')

var express = require('express')
const path = require('path');

var app = express()


/* Databse intialization */
var mongoose = require('mongoose');
mongoose.connect(require('./env/keys').mongoUri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> {
    console.log("Db connection initialized");
});

app.use('/public', express.static('public'));




app.get('/', (req,res)=>{
    res.json({'torakos': 3})
})

require('./routes/tours')(app)



app.listen(9000,()=>{
    console.log('Api serving contente on port 9000');
})