const City = require('../mongo-schemas/City')

module.exports = (app) =>{

    app.get('/cities', (req, res)=>{
        City.find({}, (err, cities)=>{
            if(err){
                console.log(err)
                return res.sendStatus(400)
            }

            if(cities){
                console.log(cities)
                return res.json(cities)
            }
        })
    })


    app.post('/private/cities', (req, res)=>{
        if(typeof req.body.id === 'undefined'){
            const city = new City({
                ...req.body
            })
            city.save()
        }
        console.log(req.body)
    })
}