const http = require('http')
const route = require('./route.js')

http.createServer(route).listen(8001)


route.get('/login', function(req, res) {
    res.end('route login~~~')
})

route.get('/index', function(req, res) {
    res.end('index ~~~hahahah')
})

