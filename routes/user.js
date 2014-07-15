
/*
 * GET users listing.
 */
var path=require('path');
exports.list = function(req, res){
  res.send("respond with a resource");
};
exports.apple = function(req,res){
   res.sendfile(path.join(__dirname,'../views/helloworld.html'));
}
exports.registered = function(req,res){
    res.sendfile(path.join(__dirname,'../views/registered.html'));
}