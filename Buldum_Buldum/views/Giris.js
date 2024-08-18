module.exports.giris = function(error){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Buldum Buldum | GİRİŞ</title>
            <link rel="stylesheet" href="./assets/login.css">
            <link rel="Shortcut Icon"  href="./imgs/kon.png"  type="image/x-icon" >
        </head>
        <body>
            <div class="panel">
                <div class="buldum"><a href="/Giris"><img src="./imgs/icon.png" height="100" width="200"></a> </div>
                <div class="contact-form">
                    <form method="post">
                        <div class="txtb">
                            <input id="E_POSTA" name="E_POSTA" type="text" placeholder="E-posta" >
                        </div>
                        <div class="txtb">
                            <input id="PASSWORD" name="PASSWORD" type="password" placeholder="Şifre">
                        </div>
                        <input type="submit" class="logbtn" value="Giriş Yap">
                        <br><input type="button" class="logbtn" value="Kayıt Ol" onclick="window.location.href ='/Kayitol';">
                    </form>
                </div>
            </div>
        </body>
        </html>`
}