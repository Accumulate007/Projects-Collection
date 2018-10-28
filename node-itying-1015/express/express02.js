
const express = require('express')
const app = new express()


// 配置ejs模板引擎
app.set('view engine', 'ejs')

// 使用中间件引入css,提供静态web服务
// 可通过 http://localhost:3800/css/style.css  访问到style.css文件
app.use(express.static('common'))

// ejs默认会在views文件下寻找模板

app.get('/', function(req, res) {
    res.render('ejs-a')
})



app.get('/news', function(req, res) {
    let arr = ['aa', 'mk', 'cd', 'jy']
    res.render('news', {
        list: arr
    })
})




// 测试端口尽量大于3000
app.listen(3800)
