/**
 * 仿express方式封装路由
 */
const http = require('http')
const url = require('url')

let G = {}

let app = function(req, res) {
    let pathname = url.parse( req.url ).pathname

    if(!pathname.endsWith('/')) {
        pathname += '/'
    }


    if(G[pathname]) {
        G[pathname](req, res)
    }else{
        res.end('the path is not exist, 404 not found!')
    }
}

app.get = function(string, callback) {
    if(!string.endsWith('/')) {
        string += '/'
    }
    if(!string.startsWith('/')) {
        string = '/' + string
    }
    G[string] = callback
}


http.createServer(app).listen(8001)

// 注册路由
app.get('login', function(req, res) {
    res.write('you are search at: ' + req.url)
    res.end()
})

module.exports = app
