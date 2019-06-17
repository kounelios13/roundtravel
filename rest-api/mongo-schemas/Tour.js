const mongoose = require('mongoose')
const Schema = mongoose.Schema


const TourSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    tripUrl: {
        type: String,
        required: true
    },
    thumbUrl: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    earlyBooking: {
        type: Boolean,
        required: false,
        default: false
    },
    earlyBookingPriceDiscount: {
      type: Number,
      required: false
    },
    earlyBookingExpiration: {
      type: Date,
      required: false
    },
    departsFrom: {
      type: [],
      required: false
    },
    tourType: {
        type: String,
        required: false
    },
    attendingCities: {
        type: [],
        required: false
    },
    included: {
        type: [],
        required: false
    },
    notIncluded: {
        type: [],
        required: false
    },
    tourProgram: {
        type: [],
        required: false
    },
    optionalTours: {
        type: [],
        required: false
    },
    shortDesc: {
        type: String,
        required: true
    },
    longDesc: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});


module.exports = Tour = mongoose.model('tours', TourSchema)
