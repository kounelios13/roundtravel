var fs = require('fs')
var path = require('path')

module.exports = (app) =>{
    app.post('/private/browse', (req, res)=>{
        const gatsbySrc = '../gatsby-client/src/';
        const targetDir = gatsbySrc + req.body.dir

        let fileList = []

        const files = fs.readdirSync(targetDir)
        files.forEach(file => {
            const fileType = path.extname(file)
            req.body.type.split('|').map(extension=>{
                if(extension === fileType){
                    if(typeof req.body.query !== 'undefined'){
                        if(file.includes(req.body.query)){
                            fileList.push(file)
                        }
                    }else{
                        fileList.push(file)
                    }
                }
            })
        });

        if(files.length > 0){
            return res.json({files: fileList})
        }
    })
}