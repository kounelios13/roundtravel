
const jwt = require('jsonwebtoken')

module.exports = (app) =>{
    app.get('/auth/login', (req, res)=>{
        if(req.body.password === process.env.KEY){
            jwt.sign({}, require('../env/keys').jwtSalt, {expiresIn: '1d'}, (err, token)=>{
                if(err){
                    return res.json({success: false})
                }else{
                    return res.json({success: true, token: 'Bearer ' + token})
                }
            })
        }else{
            res.sendStatus(403)
        }
    })
}