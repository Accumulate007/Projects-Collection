/***
 * session的负载均衡，服务器之间共享session
 * 将session存储到mongo数据库
 * 
 *  */

const express = require('express')
const app = new express()
const expressSession = require('express-session')
const MongoStore = require('connect-mongo')(expressSession)

app.use(expressSession({
    secret: 'keyboard cat', 
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
        url: 'mongodb://127.0.0.1:27017/student',
        touchAfter: 24*3600
    })
}))

app.get('/', function(req, res) {

    if(req.session.userinfo) {
        res.send('welcome back ' + req.session.userinfo)
    }else{
        res.send('还没登录~~~')
    }

})

app.get('/out', function(req, res) {

    req.session.cookie.maxAge = 0
    res.send('退出登录成功')

})

app.get('/set', function(req, res) {
    // 销毁session

    // 方式一
    // req.session.userinfo = '王二蛋'

    // 方式二
    req.session.destroy(function(err) {
        console.log(err)
    })

    res.send('设置session 成功！')
})


app.listen(3800)
