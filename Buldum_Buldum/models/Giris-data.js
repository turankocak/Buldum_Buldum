module.exports.loginDataCheck = ((E_POSTA,PASSWORD,res)=>{
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
        }
        else{
            try{
                var request = new sql.Request();
                request.query(`select * from Register_Table where E_POSTA COLLATE SQL_Latin1_General_CP1_CS_AS = '${E_POSTA}' and PASSWORD COLLATE SQL_Latin1_General_CP1_CS_AS = '${PASSWORD}'`,((err,result)=>{
                    if(err){
                        console.log(err);
                    }
                    
                    if(result.recordset.length>0){
                        console.log("giris yap");
                        res.writeHead(302,  {Location: "/Anasayfa", 'Set-Cookie':[`userId = ${result.recordset[0].ID}`,'loginCheck = true']})
                        res.end();
                    }
                    else{
                        console.log("giris yapma");
                        res.writeHead(200, {
                                'Content-Type': 'text/html'
                        });
                        var error = "giris yapilamadi";
                        const girisEkrani = require("../views/Giris")
                        const template = girisEkrani.giris(error);
                        res.write(template);
                        res.end();
                    }
                }));
            }catch(err){
                console.log(err);
            }
        }
    })
});


