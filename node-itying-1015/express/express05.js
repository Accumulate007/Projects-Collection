
const express = require('express')
const app = new express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

/***
 * cookie-parse中间件
 *  */

app.use(cookieParser())


// 路由中间件
app.get('/set', function(req, res) {
    // 参数一： cookie名
    // 参数二： cookie值
    // 参数三： cookie相关设置
    res.cookie('username', 'aabbcc123456', {
        domain: '.chen.com', // 表示chen.com域名下，所有子域名可以共享cookie
        maxAge: 15000,  // 设置cookie过期时间
        expires: new Date( Date.now() + 90000 ),    // 设置cookie过期时间
        secure: true,   // true表示cookie只在HTTPS下有效, 默认false
        path: '/news',  // 只在news目录下才能访问cookie
        httpOnly: true, // 客户端无法通过脚本读取cookie，防止XSS攻击
    })
    res.send('设置cookie成功~~')
})


// C盘->Windows->System32->drivers->etc文件可以配置计算机域名
// cookie保存在浏览器本地，如果没有清除或者过期，关闭再打开浏览器后依然存在






app.get('/news', function(req, res) {
    let cookies = req.cookies
    cookies = JSON.stringify(cookies, null, 2)
    res.send('The cookie is ' + cookies)
})


app.listen(3800)

