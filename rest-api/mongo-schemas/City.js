const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CitySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    history: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
    activities: {
        type: [],
        required: false,
    },
    images: {
        type: [],
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }

});

module.exports = City = mongoose.model('cities', CitySchema)