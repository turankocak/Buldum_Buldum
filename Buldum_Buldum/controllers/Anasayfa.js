
module.exports.get = function(req, res) {
  const AnasayfaEkrani = require("../views/Anasayfa.js");
  const template= AnasayfaEkrani.anasayfa();
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.write(template);
  res.end();
};