const Country = require('../mongo-schemas/Country')

module.exports = (app) =>{

    app.post('/private/countries/get', (req,res)=>{
        if(typeof req.body._id !== 'undefined'){
            Country.findOne({_id: req.body._id}, (err, country)=>{
                if(err){
                    return res.sendStatus(400)
                }
                if(country){
                    return res.json(country)
                }
            })
        }
    })


    app.post('/private/countries/delete', (req, res)=>{
        console.log(req.body._id)
        Country.deleteOne({_id: req.body._id}, (err, country)=>{
            if(err){
                return res.sendStatus(400)
            }
            if(country){
                return res.json({success: true})
            }
        })
    })

    app.post('/private/countries', (req, res)=>{
        if(typeof req.body._id === 'undefined'){
            const country = new Country(req.body)
            country.save((err, country)=>{
                if(err){
                    console.log(err)
                    return res.sendStatus(400)
                }
                if(country){
                    return res.json(country)
                }
            })
        }else{
            Country.updateOne({_id: req.body._id}, {...req.body}, (err, country)=>{
                if(err){
                    console.log(err)
                    return json.sendStatus(400)
                }
                if(country){
                    Country.findOne({_id: req.body._id}, (err, country)=>{
                        return res.json(country)
                    })
                }
            })
        }
    })

    app.get('/private/countries', (req, res)=>{
        Country.find({}, (err, countries)=>{
            if(err){
                console.log(err)
                return res.sendStatus(400)
            }
            if(countries){
                return res.json(countries)
            }
        })
    })

}