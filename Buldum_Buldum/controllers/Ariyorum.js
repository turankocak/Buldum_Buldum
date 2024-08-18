module.exports.get = function(req, res) {
const ariyorumEkrani = require("../views/Ariyorum");
const template= ariyorumEkrani.ariyorum();

if(req.method==='POST'){
  const insertKayipEsya = require("../models/Ariyorum-data");
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
      insertKayipEsya.insertData(dataObj.Urun_Adi,dataObj.Urun_Detayi,dataObj.AD,dataObj.SOYAD,dataObj.TELEFON,res);
  })
}
else{
res.writeHead(200, {
  'Content-Type': 'text/html'
});
res.write(template);
res.end();
}

}



