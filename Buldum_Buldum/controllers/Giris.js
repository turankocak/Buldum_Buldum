module.exports.get = function(req,res){
  const girisEkrani = require("../views/Giris");
  
  
  if(req.method==='POST'){
      const checkUserData = require("../models/Giris-data");
      const bodyParse = [];
      const dataObj = {};

      req.on("data",(data)=>{
          bodyParse.push(data);
      })
      req.on("end", async ()=>{
          const bodyParseBuffer = Buffer.concat(bodyParse);
          const stringData = bodyParseBuffer.toString();
          const parsedData = new URLSearchParams(stringData);
          for (var object of parsedData.entries()) {
              dataObj[object[0]] = object[1];
          }
          console.log(dataObj);
          checkUserData.loginDataCheck(dataObj.E_POSTA,dataObj.PASSWORD,res);
      })
  }
  else{
      const cookies = req.headers.cookie;
      if(cookies  != undefined){
          const cookiesArray =  JSON.stringify(cookies.split("; "));
          if(cookiesArray.search("succsessfullyCreated")>-1){
              res.writeHead(200, {
                  'Content-Type': 'text/html'
              });
              var page = fs.readFileSync(process.cwd() + '/views/Giris.js','utf-8');
              res.end(ejs.render(page,{successfully:'Başarıyla kayıt olundu!'}));   
              alert('Giris Yapıldı')
          }
          else{
              if(cookiesArray.search("userId")>-1){
                  res.writeHead(302,  {Location: "/Anasayfa"})
                  res.end();
              }
          }
      }
      else{
          res.writeHead(200, {
              'Content-Type': 'text/html'
          });
          
          var error ="";
          const template= girisEkrani.giris(error);
          res.write(template);
          res.end();
      }
  }
}