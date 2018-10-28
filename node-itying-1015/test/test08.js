/**
 * 路由：根据不同的url请求处理不同的业务逻辑
 */

const http = require('http')
const url = require('url')

const server = http.createServer(function (req, res) {
    let pathname = url.parse(req.url).pathname;

    if(pathname == '/index') {
        res.send('index...')
    }else if(pathname == '/login') {
        res.send('login~~~')
    }else{
        res.send('404 Not found!')
    }
    res.end();
})

server.listen(8001);