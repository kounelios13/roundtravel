const Tour = require('./mongo-schemas/Tour')
const jwt = require('jsonwebtoken')
var express = require('express')
const path = require('path');
const cors = require('cors')
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

app.use(cors())

// app.use((req, res, next)=>{
//     next();
// })

app.use((req, res, next)=>{
    if(req.path.split('/')[1] === 'private'){
        const bearerToken = req.headers['authorization']

        if(typeof bearerToken !== 'undefined'){
            const token = bearerToken.split(' ')[1]
            jwt.verify(token, require('./env/keys').jwtSalt, (err, data)=>{
                if(err){
                    res.sendStatus(403)
                }else{
                    next()
                }
            })
        }else{
            return res.sendStatus(403)
        }
    }else{
        next()
    }
})


require('./routes/tours')(app)
require('./routes/auth')(app)
require('./routes/upload')(app)
require('./routes/browse-files')(app)
require('./routes/cities')(app)


app.listen(9000,()=>{
    console.log('Api serving contente on port 9000');
})