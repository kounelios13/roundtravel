var express = require('express')
var path = require('path')

var app = express()



app.use('/images', express.static('src/images'));


app.listen(9002, ()=>{
    console.log('Api serving contente on port 9002');
})