const fileUpload = require('express-fileupload');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })



module.exports = (app) =>{
    app.use(fileUpload({createParentPath: true}));
    app.post('/private/upload',  (req,res,next)=>{
        console.log(req.body.type)
        if(req.body.type === 'images'){
            Object.values(req.files).map(img=>{
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