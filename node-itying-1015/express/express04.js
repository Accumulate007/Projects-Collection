
const express = require('express')
const app = new express()
const bodyParser = require('body-parser')

/***
 * body-parse中间件
 *  */

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

// 路由中间件
app.get('/', function(req, res, next) {
    res.send('hello express')

    next()
})

app.set('view engine', 'ejs')

app.get('/login', function(req, res) {
    res.render('login')
})

app.post('/dologin', function(req, res) {
    let msg = req.body  // 获取post提交的数据
    console.log('post message is: ' + msg)
})


app.listen(3800)











