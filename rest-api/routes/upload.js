const fileUpload = require('express-fileupload');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })



module.exports = (app) =>{
    app.use(fileUpload({createParentPath: true}));
    app.post('/private/upload',  (req,res,next)=>{

        Object.values(req.files).map(img=>{
            img.mv('./public/' + req.body.name + '/' + img.name)
                .then((img)=>{
                    console.log(img)
                })
                .catch(err=>{
                    console.log(err)
                })
        })



    })
}