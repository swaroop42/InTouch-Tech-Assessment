var fs= require("fs");
var path= require("path");
var normalizedPath = path.join(__dirname, "");
module.exports= function(router){
  fs.readdirSync(normalizedPath).forEach(function(file) {
    if (file == "index.js") return;
    
    var rt= require("./"+file);
    rt.initRoutes(router);
  });
}