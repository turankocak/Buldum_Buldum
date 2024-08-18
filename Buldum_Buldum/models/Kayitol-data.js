module.exports.registerDataCheck = ((AD,SOYAD,TELEFON,E_POSTA,PASSWORD,res)=>{
    const sql = require('mssql');

    const sqlConfig = {  
        server: '192.168.1.107',  //update me
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
            const template= KayitolEkrani.Kayitol(error);
            res.write(template);
            res.end();
        }
        else{
            try{
                var request = new sql.Request();
                request.query(`select * from Register_Table where E_POSTA = '${E_POSTA}'`,((err,result)=>{ //COLLATE SQL_Latin1_General_CP1_CS_AS şifrede check login
                    console.log(result.recordset);
                    if(result.recordset.length>0){
                        console.log("oluşturma");
                        res.writeHead(200, {
                            'Content-Type': 'text/html'
                        });
                        var error = "Böyle bir kullanıcı zaten var!"
                        const KayitolEkrani = require("../views/Kayitol");
                        const template= KayitolEkrani.Kayitol(error);
                        res.write(template);
                        res.end();
                    }
                    else{
                        console.log("oluştur");
                        request.query(`insert into Register_Table values('${AD}','${SOYAD}','${TELEFON}','${E_POSTA}','${PASSWORD}')`);
                        var error = "kullanıcı oluşturuldu"
                        // const girisEkrani = require("../views/Giris");
                        // const template= girisEkrani.giris(error);
                        // res.write(template);
                        res.writeHead(302, {Location: "/Giris"})
                        res.end();
                    }
                }));
            }catch(err){
                console.log(err);
            }
        }
    })
});
