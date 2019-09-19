let fs = require("fs");
let buf = new Buffer.alloc(2048)
let tools = require("./tools")
//登录
exports.login = function(_username,_password){
    let userinfoList = tools.getUserInfo()
    
    let login_state = "用户名或密码错误";
    for(let i=0;i<userinfoList.length;i++){
        if(userinfoList[i].username == _username){
            if(userinfoList[i].password == _password){
                login_state = userinfoList[i];
                break;
            }
        }
    }
    return login_state;
}

//注册
exports.register = function(_username,_password){
    
    let userinfoList = tools.getUserInfo()
    let tip = "注册成功";
    let is_repeat = false;
    for(let i=0;i<userinfoList.length;i++){
        if(userinfoList[i].username == _username){    
            is_repeat = true;
        }
    }
    
    if(!is_repeat){
        userinfoList.push({
            username:_username,
            password:_password
        })
        let fd = fs.openSync("./database/userinfo","w")
        let writeResult = fs.writeSync(fd,JSON.stringify(userinfoList))
        fs.close(fd,function(err){
            //关闭文件异步函数
            if(err){console.log(err)}
        })
        if(writeResult){
            tip = "注册成功";
        }
    }else{
        tip = "用户名已被注册";
    }
    
    return tip;
}