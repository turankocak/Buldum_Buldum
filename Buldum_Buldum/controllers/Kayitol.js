module.exports.get = function(req,res){
  const KayitolEkrani = require("../views/Kayitol");

  if(req.method==='POST'){
      const checkUserData = require("../models/Kayitol-data");
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
          checkUserData.registerDataCheck(dataObj.AD,dataObj.SOYAD,dataObj.TELEFON,dataObj.E_POSTA,dataObj.PASSWORD,res);
      })
  }
  else{
      const cookies = req.headers.cookie;
      if(cookies  != undefined){
          const cookiesArray =  JSON.stringify(cookies.split("; "));
          if(cookiesArray.search("userId")>-1){
              res.writeHead(302,  {Location: "/Giris"})
              res.end();
          }
      }
      else{
          res.writeHead(200, {
              'Content-Type': 'text/html'
          });
          var error ="";
          const template= KayitolEkrani.Kayitol(error);
          res.write(template);
          res.end();
      }
  }
}