
module.exports.get = function(req, res) {
    const HakkimizdaEkrani = require("../views/Hakkimizda.js");
    const template= HakkimizdaEkrani.hakkimizda();
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write(template);
    res.end();
  };