module.exports = (app) =>{
    app.get('/auth/login', (req, res)=>{
        if(req.body.password == process.env.KEY){
            return res.json({ok: 'ok'})
        }else{
            return res.json({ok: 'fail'})
        }
    })



}