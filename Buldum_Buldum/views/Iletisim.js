module.exports.iletisim = function(){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Buldum Buldum | İLETİŞİM</title>
      <link rel="Shortcut Icon"  href="./imgs/kon.png"  type="image/x-icon" >
      <link rel="stylesheet" type="text/css" href="./assets/style.css" />
      <link rel="stylesheet" type="text/css" href="./assets/iletisim.css" />
      </head>
      
      <body>
        <div width="900" align="center">
          <div align="center"><img src="./imgs/bannerbg.png" width="900" height="200" /></div>
          <div id="logo1"><a href="/Anasayfa"><img src="./imgs/logoust.png" width="800" height="130"/></a>
          </div>
      
      <div class="footer">
        <ul class="footer">
          <li><a href="/Anasayfa">ANASAYFA</a></li>
          <li><a href="/Hakkimizda">HAKKIMIZDA</a></li>
          <li><a href="/Iletisim">İLETİŞİM</a></li>
          <li><a href="/Ilanver">İLAN VER +</a></li>
          <li><a href="/Giris">ÇIKIŞ YAP </a></li>
          </ul>
      </div> 
          <table>
            <tr>
            <td></td>
            </tr>
          </table>
          <div class="cerceve">
            <h1>ILETIŞIM</h1>
            <div class="container">
              <form id="contact" action="" method="">
              <div class="form-control">
              <input placeholder="Adınız Soyadınız" type="text" required autofocus>
              </div>
              <div class="form-control">
              <input placeholder="E-Posta Adresiniz" type="email" required>
              </div>
              <div class="form-control">
              <input placeholder="Konu" type="text" required>
              </div>
              <div class="form-control">
              <textarea placeholder="Lütfen Mesajınızı Buraya Yazın.." required></textarea>
              </div>
              <div class="form-control">
              <button name="submit" type="submit" id="submit">GÖNDER</button>
              </div>
              </form>
              </div>
            </div>
          <div align="center"><img src="./imgs/footer.png" width="900" height="250" /> 
         </div>
        </div>
      </body>
      </html>
      `
}