module.exports = function(application){
  application.get('/', function(req, res){
    application.src.controllers.news.index(application, req, res);
  });
}

