const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ContinentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});


module.exports = Continent = mongoose.model('Continents', ContinentSchema)
