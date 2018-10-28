/**
 * 仿Express封装路由
 */

const http = require('http')
const route = require('like-express.js')
const app = route()

app.get('/', function (req, res) {
    res.end('首页 express...')
})

app.get('/login', function (req, res) {
    res.end('login express...')
})

app.get('/register', function (req, res) {
    res.end('register express...')
})

app.post('/test', function (req, res) {
    res.end('test express...post method~')
})


server.listen(8001)


