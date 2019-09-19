let fs = require("fs");
let buf = new Buffer.alloc(1024)
//查询用户信息
exports.getUserInfo = function(){
    let fd = fs.openSync("./database/userinfo","r")
    let bytes = fs.readSync(fd,buf,0,buf.length,0)
    let userinfoList = JSON.parse(buf.slice(0,bytes).toString())//用户信息
    fs.close(fd,function(err){
        //关闭文件异步函数
        if(err){console.log(err)}
    })
    return userinfoList;
}