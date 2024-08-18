
module.exports.get = function(req, res) {
    const iletisimEkrani = require("../views/Iletisim");
    const template= iletisimEkrani.iletisim();
  
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write(template);
    res.end();
  };