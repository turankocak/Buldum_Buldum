module.exports.Kayitol = function(error){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Buldum Buldum | KAYITOL</title>
          <link rel="stylesheet" href="./assets/login.css">
          <link rel="Shortcut Icon"  href="./imgs/kon.png"  type="image/x-icon" >
      </script>
      </head>
      <body>
            <div>${error}</div>
          <div class="panel2">
              <div class="buldum"><a href="/Kayitol"><img src="./imgs/icon.png" height="100" width="200"></a> </div>
              <div class="contact-form">
                  <form action="/Kayitol" method ="post">
                      <div class="txtb">
        <input type="text"   placeholder="İsim" id="AD" name="AD" required="" /> 
        <input type="text"  placeholder="Soyisim " id="SOYAD" name="SOYAD"  required="" /> 
        <input type="text"  placeholder="Telefon " id="TELEFON" name="TELEFON" required="" /> 
        <input type="text"  placeholder="E-posta " id="E_POSTA" name="E_POSTA" required=""/> 
        <input type="password"  placeholder="Şifre" id="PASSWORD" name="PASSWORD" required=""/> 
                      </div>
                      <input type="submit" class="logbtn" value="Kayit Ol"/>
              <br><input type="button" class="logbtn" value="Giris Yap" onclick="window.location.href ='/Giris';" />
            </form>
              </div>
          </div>
      </body>
      </html>`
}