const City = require('../mongo-schemas/City')

module.exports = (app) =>{
    app.get('/private/cities', (req, res)=>{
        City.find({}, (err, cities)=>{
            if(err){
                return res.sendStatus(400)
            }
            if(cities){
                console.log(cities)
                return res.json(cities)
            }
        })
    })

    app.post('/private/cities/get', (req, res)=>{
        if(req.body._id){
            City.findOne({_id: req.body._id}, (err,city)=>{
                if(err){
                    return res.sendStatus(400)
                }
                if(city){
                    return res.json(city)
                }
            })
        }
    })

    app.post('/private/cities/delete', (req, res)=>{
        console.log(req.body._id)
        City.deleteOne({_id: req.body._id}, (err, city)=>{
            if(err){
                return res.sendStatus(400)
            }
            if(city){
                return res.json({success: true})
            }
        })
    })

    app.post('/cities/get', (req, res)=>{
        console.log(req.body)
        City.findOne({url: req.body.url}, (err, city)=>{
            if(err){
                return res.json({status: 400})
            }
            if(city){
                return res.json(city)
            }else{
                return res.json({status: 404})
            }
        })
    })

    app.post('/private/cities', (req, res)=>{
        if(typeof req.body._id === 'undefined'){
            const city = new City({
                ...req.body
            })
            city.save((err,city)=>{
                if(err){
                    console.log(err)
                    return res.sendStatus(400)
                }
                if(city){
                    console.log(city)
                    return res.json(city)
                }
            })
        }else{
            City.updateOne({_id: req.body._id}, {...req.body}, (err, city)=>{
                if(err){
                    return res.sendStatus(400)
                }
                if(city){
                    City.findOne({_id: req.body._id}, (err, city)=>{
                        return res.json(city)
                    })
                }
            })
        }
    })
}