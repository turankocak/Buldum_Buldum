module.exports.ariyorum = function(){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Buldum Buldum | İLAN VER</title>
        <link rel="stylesheet" href="./assets/ilanver.css">
        <link rel="Shortcut Icon"  href="./imgs/kon.png"  type="image/x-icon" >
    </script>
    </head>
    <body>
    
    <script>
    var x = document.getElementById("demo");
    
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else { öj
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
    }
    
    function showPosition(position) {
      document.getElementById("harita").setAttribute("src","https://maps.google.com.tr/?q= "+ position.coords.latitude +" "+ position.coords.latitude + " &output=embed")
    }
    </script>
        <div class="panel">
            <div class="buldum"> <a href="/Ilanver"> <img name="anasayfa"   src="../imgs/icon.png" height="100" width="200" id="anasayfa" usemap="#anasayfa" alt=""></a> 
             </div>
            <div class="contact-form"> 
                <form method="post">
                    <div class="txtb">
                        <input id="Ne Kaybettin" name="Urun_Adi" type="text" placeholder="Ne Kaybettin?">
                    </div>
                    <div class="txtb">
                         <label> <font color="gray" >Ürün Hakkında Detaylı bilgi ?</font></label>
                        <textarea cols="38" type="text" name="Urun_Detayi" rows="5"> </textarea>
                    </div>
                    <div class="txtb">
                        <input id="İsim" name="AD" type="text" placeholder="İsim" >
                    </div>
                    <div class="txtb">
                        <input id="Soyisim" name="SOYAD" type="text" placeholder="Soyisim">
                    </div>
                    <div class="txtb">
                        <input type="text" name="TELEFON" placeholder="Telefon No">
                    </div> 
                    <div class="txtb">
                        <label> <font color="gray" >Konumunuz...</font></label>
                        <iframe name="Konum" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49081.77001457832!2d36.99590945!3d39.748396500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x407eab6a6050ec65%3A0x83f714044652ea9b!2sSivas%2C%20Sivas%20Merkez%2FSivas!5e0!3m2!1str!2str!4v1668543865138!5m2!1str!2str"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="320" frameborder="1" id="harita" > </iframe>
                    </div>
                    <!-- <br><input type="button" class="logbtn" value="İLAN VER +" onclick="window.location.href ='kayıtol.html';"> -->
                    <button onclick="getLocation()" class="logbtn">Konum Bul</button>
                <br><input type="submit" class="logbtn" value="İLAN VER +" >
                </form>
            </div>
        </div>
    </body>
    </html>`
}