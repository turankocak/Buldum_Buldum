var url = require('url');
var fs = require('fs');
const path = require('path/posix');

module.exports.get = function(req, res) {
    req.requrl = url.parse(req.url,true)
    var pathname = url.parse(req.url).pathname;
    if (pathname.match("\.css$")) {

        var cssPath = path.join(__dirname, "..", pathname);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, { "Content-Type": "text/css" });
        fileStream.pipe(res);

    } else if (pathname.match("\.png$")) {

        var imagePath = path.join(__dirname, "..", pathname);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "image/png" });
        fileStream.pipe(res);

    } else if (pathname.match("\.jpg$")) {

        var imagePath = path.join(__dirname, "..", pathname);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, { "Content-Type": "image/jpg" });
        fileStream.pipe(res);

    } else if (pathname.match("\.mp4$")) {

        var videoPath = path.join(__dirname, "..", pathname);
        var fileStream = fs.createReadStream(videoPath);
        res.writeHead(200, { "Content-Type": "video/mp4" });
        fileStream.pipe(res);

    } else if (pathname.match("\.js$")) {
        
        var videoPath = path.join(__dirname, "..", pathname);
        var fileStream = fs.createReadStream(videoPath);
        res.writeHead(200, { "Content-Type": "text/javascript" });
        fileStream.pipe(res);
    } 
    else {
      switch(pathname){
        case '/':case '/Giris':{require('./controllers/Giris').get(req,res);break;};
        case '/Kayitol':{require('./controllers/Kayitol').get(req,res);break;};
        case '/Anasayfa':{require('./controllers/Anasayfa').get(req,res);break;};
        case '/Hakkimizda':{require('./controllers/Hakkimizda').get(req,res);break;};
        case '/Iletisim':{require('./controllers/Iletisim').get(req,res);break;};
        case '/Ilanver':{require('./controllers/Ilanver').get(req,res);break;};
        case '/Buldum':{require('./controllers/Buldum').get(req,res);break;};
        case '/Ariyorum':{require('./controllers/Ariyorum').get(req,res);break;};
        default:{require('./controllers/404-error.js').get(req,res);break;};
       }
    }
};
