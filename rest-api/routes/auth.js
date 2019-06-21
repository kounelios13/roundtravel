const jwt = require('jsonwebtoken')

module.exports = (app) =>{
    app.post('/auth/login', (req, res)=>{
        console.log(req)
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