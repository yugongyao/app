const multiparty = require('multiparty');
const fs = require('fs');
const paths = require('path');

var allPath = [];
module.exports = () => (req, res, next) => {
    
    var form = new multiparty.Form();
    form.parse(req, (error, fileds, files) => {
        if(!files){
            res.end("ERROR！");     
        }else{

            // console.log(files.img);
            console.log(fileds);
            console.log(fileds.desc[0],fileds.theme[0],fileds.address[0],fileds.pro[0]);
            
    
            for(var i = 0; i < files.img.length; i++) {
                // 权限问题
                //    fs.renameSync(files.img[i].path, paths.join(__dirname, paths.basename(files.img[i].path)))
                var oldPath = files.img[i].path;
                var newPath = paths.join(__dirname, 'img', paths.basename(files.img[i].path))
                allPath.push(newPath);
                var readStream = fs.createReadStream(oldPath)
                var writeStream = fs.createWriteStream(newPath);
    
                readStream.pipe(writeStream);
                
                
                
            }
            res.send(allPath);
        }
    });

}