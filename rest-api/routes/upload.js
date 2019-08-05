const fileUpload = require('express-fileupload');
var multer  = require('multer')
var fs = require('fs')



module.exports = (app) =>{
    app.use(fileUpload({createParentPath: true}));
    app.post('/private/upload',  (req,res,next)=>{

        if(req.body.type === 'images'){
            Object.values(req.files).map(img=>{
                try {
                    if (fs.existsSync('../gatsby-client/src/images/' + img.name)) {
                        return res.sendStatus(409)
                    }
                } catch(err) {
                    console.error(err)
                }


                img.mv('../gatsby-client/src/images/' + img.name)
                    .then((img)=>{
                        res.sendStatus(200)
                    })
                    .catch(err=>{
                        res.sendStatus(400)
                    })
            })
        }
    })
}