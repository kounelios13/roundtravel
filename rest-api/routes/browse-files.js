var fs = require('fs')


module.exports = (app) =>{
    app.post('/private/browse', (req, res)=>{
        const path = 'public/' + req.body.folderPath;
        const files = fs.readdirSync(path)
        if(files.length > 0){
            const fullPath = files.map(file=>{
                return  path + '/' + file
            })
            return res.json({files: fullPath})
        }
    })

}