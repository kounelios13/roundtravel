const Continent = require('../mongo-schemas/Continent')


module.exports = (app) =>{
    app.get('/continents/', (req, res)=>{
        Continent.find({}, (err, continents)=>{
            if(err){
                return res.sendStatus(400)
            }
            if(continents){
                return res.json(continents)
            }
        })
    })

}