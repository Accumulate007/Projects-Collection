
const express = require('express')
const app = new express()


/***
 * 中间件： 路由匹配之前和路由匹配之后的一系列操作
 *  */

// 中间件 表示匹配任意路由
// 应用级中间件
app.use(function(req, res, next) {
    console.log(new Date())

    next()  // 继续向下匹配路由
})

app.use(express.static('common'))
// 内置中间件(表示托管静态内容)
app.use('/static', express.static('common'))    // 虚拟目录

// 路由中间件
app.get('/', function(req, res, next) {
    res.send('hello express')

    next()
})


app.get('/news', function(req, res) {
    res.send('lot of news')
})



app.use(function(req, res) {
    res.status(404).send('404, 没有对应路由')
})



app.listen(3800)
