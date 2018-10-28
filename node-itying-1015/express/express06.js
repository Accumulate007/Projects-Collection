
const express = require('express')
const app = new express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

/***
 * cookie的加密
 *  */

 // 加密cookie需要在中间件传入任意的字符串
app.use(cookieParser('anystring'))


// 路由中间件
app.get('/set', function(req, res) {

    res.cookie('username', 'cookiepass10-25', {
        maxAge: 15000,
        signed: true    // 加密cookie信息
    })
    res.send('设置cookie成功~~')
})

app.get('/get', function(req, res) {
    // 获取加密后的cookie
    let c = req.signedCookies;
    res.send('The cookie is' + JSON.stringify(c))
})



app.listen(3800)

