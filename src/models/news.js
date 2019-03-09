var fs = require('fs');

function news() {}

news.prototype.getLastNews = function(callback) {
  fs.readFile('./data/noticias.json', 'utf8', function(err, result) {
    var data = [];

    if (!err) {
      var obj = JSON.parse(result);

      if (obj.noticias.length > 4) {
        var i = 4;
      } else {
        var i = (obj.noticias.length - 1);
      }
    
      obj.noticias.forEach(function(noticia) {
        if (i >=  0) {
          data[i] = noticia;
	  i--;
        }
      });
    }	   
    callback(err, data);
  });
};

module.exports = function(){
  return news;
}

