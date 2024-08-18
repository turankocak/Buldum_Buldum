module.exports.ilanver = function(){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Buldum Buldum | İLANVER</title>
        <link rel="stylesheet" href="./assets/ilanver.css">
        <link rel="Shortcut Icon"  href="./imgs/kon.png"  type="image/x-icon" >
    </head>
    <body>
        
        <div class="panel3">
            <div class="buldum"><a href="/Anasayfa" title="ANASAYFA"><img src="./imgs/icon.png" height="100" width="200"></a> </div>
            <div class="contact-form">
                <form>
                    <div class="txtb">
                    </div>
                    <input type="button" class="logbtn" value="BULDUM" onclick="window.location.href ='/Buldum';">
                    <br><input type="button" class="logbtn" value="ARIYORUM" onclick="window.location.href ='/Ariyorum';">
                </form>
            </div>
        </div>
    </body>
    </html>`
}