/***
 * express-session中间件的使用
 * 
 * session是另一种客户端状态记录机制，它保存在服务端
 * 当客户端第一次访问服务器的时候，服务器会创建一个session对象，类似于key-value的键值对，然后将key发送给客户端
 * 客户端可以将key保存在cookie中，这样再次向服务器发送请求时会携带session
 * 
 * 浏览器关闭后，session也将消失
 *  */

const express = require('express')
const app = new express()
const expressSession = require('express-session')

app.use(expressSession({
    secret: 'keyboard cat',     // 服务器生成session的签名(可以为任意字符串)
    resave: false,              // 强制保存session,即使它没有变化
    saveUninitialized: true,    // 强制将未初始化的session存储
    cookie: {
        secure: false,            // 是否https的情况下才可以访问cookie
        maxAge: 1000*8,         // 设置过期时间
        rolling: true           // 每次请求强行设置session，重置过期时间
    }

}))

app.get('/', function(req, res) {

    if(req.session.userinfo) {
        res.send('welcome back ：：：：' + req.session.userinfo)
    }else{
        res.send('还没登录~~~')
    }

})

app.get('/set', function(req, res) {
    req.session.userinfo = 'zhangsan123'    // 设置session
    res.send('设置session 成功！')
})


app.listen(3800)
