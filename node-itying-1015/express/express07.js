
const express = require('express')
const app = new express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

/***
 * 使用cookie保存浏览记录
 *  */

app.use(cookieParser())


app.get('/', function(req, res) {

    res.send('您浏览过的城市有： ' + req.cookies.citys)
})

app.get('/ly', function(req, res) {
    let city = req.query.city   // 当前城市
    let citys = req.cookies.citys // 浏览过的城市

    if(citys) {
        citys.push(city)
    }else{
        citys = []
        citys.push(city)
    }
    res.cookie('citys', citys, {
        maxAge: 60*1000*10  // 过期时间10分钟
    })
    res.send('您浏览的城市： ' + city)
})



app.listen(3800)

