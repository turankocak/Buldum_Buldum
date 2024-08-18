
module.exports.get = function(req, res) {
    const errorEkrani = require("../views/404-error.js");
    const template= errorEkrani.error();
  
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write(template);
    res.end();
  };