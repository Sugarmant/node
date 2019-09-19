// var http = require("http");
// var verification = require('./lib/verification')

// http.createServer(function(req,res){
//     res.write("<head><meta charset='utf-8'/></head>");
//     res.end(testfun());
// }).listen(3030);

//上面的是准备要写接口的东西，可以无视

console.log(verification.login("李刚","123456"))
console.log(verification.register("meis27461","123456"))