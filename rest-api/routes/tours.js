module.exports = function(app){

    app.get('/tours', function(req, res){

        const tor = new Tour({
            title: 'Παρισι',
            thumbUrl: 'https://wallpaperplay.com/walls/full/0/8/9/203246.jpg',
            price: 45,
            shortDesc: 'Το νισι των θεων',
            longDesc: 'Εξερευνηστε κεεπο',
            tripUrl: 'parisi-kuk',
            earlyBooking: true,
            earlyBookingPriceDiscount: 35,
            earlyBookingExpiration: new Date(),
            departsFrom: ['Αθήνα', 'Ηρακλειο', 'Χανια'],
            tourType: 'Οδικως',
            attendingCities: ['Παρισι', 'Νις'],
            included: ['Tour guide', 'Another item'],
            notIncluded: ['Φοροι'],
            tourProgram: [
                {
                    day: '1',
                    content: 'Lorem ipsum sit Lorem ipsum sit Lorem ipsum sit Lorem ipsum sitdolor'
                },
                {
                    day: '2',
                    content: 'Lorem ipsum sit Lorem ipsum sit Lorem ipsum sit Lorem ipsum sitdolor'
                }
            ],
            shownInSlider: true,
            extraField: 'tokrewo'
        })
        tor.save()
    });

    //other routes..
}