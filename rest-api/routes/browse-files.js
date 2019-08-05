var fs = require('fs')
var path = require('path')

module.exports = (app) =>{
    app.post('/private/browse/rename', (req,res)=>{
        const gatsbySrc = '../gatsby-client/src/images/';
        if(req.body.type === 'image'){

            try {
                if (fs.existsSync(`${gatsbySrc}${req.body.prevName}`)) {
                    return res.json({success: false, type: 'exists'})
                }
            } catch(err) {
                console.error(err)
            }

            if(typeof req.body.prevName === 'undefined' || typeof req.body.newName === 'undefined'){
                return res.json({success: false})
            }


            fs.rename(`${gatsbySrc}${req.body.prevName}`, `${gatsbySrc}${req.body.newName}`, function(err) {
                if ( err ) return res.json({success: false});
                return res.json({success: true})
            });
        }
    })

    app.post('/private/browse/delete', (req,res)=>{
        const gatsbySrc = '../gatsby-client/src/';
        if(req.body.type === 'image'){
            try {
                console.log(`${gatsbySrc}images/${req.body.fileName}`)
                fs.unlinkSync(`${gatsbySrc}images/${req.body.fileName}`)
                return res.json({success: true})
            }catch(err) {
                console.log(err)
                return res.json({success: false})
            }
        }
    })

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