
const express = require('express')
const app = new express()


app.get('/', function(req, res) {
    res.send('hello express')
})


app.get('/news', function(req, res) {
    res.send('lot of news')
})

// 动态路由
app.get('/newscontent/:aid', function(req, res) {

    // 获取动态路由的传值
    let d = req.params.aid

    res.send('changing route: ' + d)
})

// 获取get传值
app.get('/get', function(req, res) {
    // 通过query获取get传值
    let query = req.query

    res.send(query.name + " : " + query.age)
})


app.listen(3800)
