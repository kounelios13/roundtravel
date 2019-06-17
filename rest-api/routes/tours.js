module.exports = function(app){

    app.get('/tours', function(req, res){

        const tor = new Tour({
            title: 'Μπαλι',
            thumbUrl: 'https://www.manessistravel.gr/_storageWeb_/n/17631550672101/ig/17469038976422/b/692033667068/isk/innerWide/shutterstock_631736717-pura-ulun-danu-bratan-temple-in-Bali_-indonesia.jpeg',
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
            ]
        })
        tor.save()
    });

    //other routes..
}