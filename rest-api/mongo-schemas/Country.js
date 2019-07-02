const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CountrySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    continent: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Country = mongoose.model('countries', CountrySchema)