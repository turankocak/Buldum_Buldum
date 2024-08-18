module.exports.insertData = ((Urun_Adi,Urun_Detayi,AD,SOYAD,TELEFON,res)=>{
    const sql = require('mssql');
    const buldumEkrani = require("../views/Buldum");
    
    const sqlConfig = {  
        server: '169.254.247.51',  //update me
       authentication: {
           type: 'default',
           options: {
               userName: 'sa', //update me
               password: 'smyo'  //update me
           }
       },
       database: 'a2020317038',  //update me
       options: {
           // If you are on Microsoft Azure, you need encryption:
           encrypt: false
       }
   }; 
    sql.connect(sqlConfig,(error)=>{
        if(error){
             console.log(error);
            var error = "database bağlanamadı"
            const template= buldumEkrani.buldum(error);
            res.write(template);
            res.end();
        }
        else{
            try{
                var request = new sql.Request();
                request.query(`insert into Ilanlar_Table values('${Urun_Adi}','${Urun_Detayi}','${AD}','${SOYAD}','${TELEFON}')`);
                        console.log("Ilan Oluştu");
                        res.writeHead(302, {Location: "/Anasayfa"});
                        res.end();  
            }catch(err){
                console.log(err);
            }
        }
    })
});

