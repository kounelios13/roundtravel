const Tour = require('./mongo-schemas/Tour')

var express = require('express')
const path = require('path');

var app = express()


/* Databse intialization */
var mongoose = require('mongoose');
mongoose.connect(require('./env/keys').mongoUri, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> {
    console.log("Db connection initialized");
});

app.use('/public', express.static('public'));

var bodyParser = require("body-parser")
app.use(bodyParser.json());
//configures body parser to parse JSON
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', (req,res)=>{
    res.json({'torakos': 3})
})

require('./routes/tours')(app)
require('./routes/auth')(app)



app.listen(9000,()=>{
    console.log('Api serving contente on port 9000');
})