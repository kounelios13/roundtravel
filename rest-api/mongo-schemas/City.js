const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CitySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    pageTitle: {
        type: String,
        required: true
    },
    pageSubtitle: {
        type: String,
        required: true
    },
    descriptionTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    descriptionImage: {
        type: String,
        required: true
    },
    descriptionImageX: {
      type: String,
      required: true,
    },
    descriptionImageY: {
        type: String,
        required: true
    },
    metaTitle: {
        type: String,
        required: true
    },
    metaDescription: {
        type: String,
        required: true
    },
    suggestedTitle: {
        type: String,
        required: true
    },
    suggestedSubtitle: {
        type: String,
        required: true
    },
    sightsTitle: {
        type: String,
        required: true
    },
    sightsSubtitle: {
        type: String,
        required: true
    },
    sights: {
      type: [],
      required: false
    },
    tags: {
        type: String,
        required: true
    },
    url: {
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
    lat: {
      type: Number,
      required: false
    },
    lon: {
        type: Number,
        required: false
    },
    information: {
        type: [],
        required: false
    },
    visibleInMap: {
        type: Boolean,
        required: false
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

module.exports = City = mongoose.model('cities', CitySchema)