
const express = require('express')
const app = express()
const ejs = require('ejs')
const bodyParser = require('body-parser')
const DB = require('./modules/db.js')
const session = require('express-session')
const Md5Node = require('md5-node')


// 使用ejs(默认找views这个目录下的资源)
app.set('view engine', 'ejs')

// 配置public目录为静态资源目录
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser())

app.use(session({
    secret: '2018-10-27,hangzhou',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 1000*60*30
    },
    rolling: true
}))



// 自定义中间件，判断用户的登录状态
app.use(function(req, res, next) {
    let u = req.url
    if(u === '/login' || u === '/doLogin'){
        next()
    }else{
        if(req.session.userinfo && req.session.userinfo.username != '') {
            app.locals['userinfo'] = req.session.userinfo   // ejs中设置全局数据,所有的页面都可以使用
            next()
        }else{
            res.redirect('/login')
        }
    }
})

app.get('/', function(req, res) {
    res.send('abc')
})


app.get('/login', function(req, res) {
    res.render('login')
})

// 获取登录提交的数据
app.post('/doLogin', function(req, res) {
    // 获取post提交的数据，并加密
    let username = req.body.username
    let password = Md5Node( req.body.password )

    DB.find('user', {
        username: username,
        password: password
    }, function(error, data) {
        if(data.length > 0) {
            console.log('登录成功')
            // 保存用户信息
            req.session.userinfo = data[0]
            res.redirect('/product')    // 登录成功，跳转商品列表页面
        }else{
            console.log('登录失败')
            res.send("<script>alert('用户名或密码错误');location.href=\"/login\"</script>")
        }
    })

})


app.get('/product', function(req, res) {

    DB.find('product', {}, function(error, data) {
        res.render('product', {
            list: data
        })
    })    
})

app.get('/productadd', function(req, res) {
    res.render('productadd')
})

app.get('/productedit', function(req, res) {
    res.render('productedit')
})

app.get('/productdelete', function(req, res) {
    res.send('productdelete')
})

app.get('/loginOut', function(req, res) {
    req.session.destroy(function(err) {
        if(err) {
            console.log(err)
        }else{
            res.redirect('/login')
        }
    })
})

app.get('/delete', function(req, res) {
    DB.deleteOne('product', {
        "title": "mac"
    }, function(error, data) {
        if(error) {
            console.log('删除数据失败')
            return
        }
        res.send('删除数据 mac 成功！！')
    })
})

app.listen(3990)
