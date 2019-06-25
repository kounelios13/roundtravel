module.exports = (app) =>{
    app.post('/private/upload', (req,res)=>{
        console.log(req.files)

    })
}