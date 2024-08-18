
module.exports.get = function(req, res) {
    const IlanverEkrani = require("../views/Ilanver.js");
    const template= IlanverEkrani.ilanver();
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write(template);
    res.end();
  };