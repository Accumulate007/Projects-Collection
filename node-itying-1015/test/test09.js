/**
 * ejs模板引擎
 */

const http = require('http')
const url = require('url')
const ejs = require('ejs')

const server = http.createServer(function (req, res) {
    let pathname = url.parse(req.url).pathname;
    console.log('pathname: ',pathname)

    // 获取请求方式
    let method = req.method;

    res.writeHead(200, {
        "Content-Type": "text/html;charset='utf-8'"
    })
    if(pathname === '/favicon.ico') return false;
    if(pathname == '/index') {
        res.write('index...')
    }else if(pathname == '/login') {
        // 把数据库数据渲染到ejs模板上

        let msg = 'hello, this is data';
        let list = ['abc', 'messi', 'jack'];
        ejs.renderFile('createByFS/views/login.ejs', {
            msg: msg,
            list: list
        }, function (err, data) {
            if(err) {
                console.log(err)
                return;
            }
            res.end(msg)
        })
    }else{
        res.write('404 Not found!')
    }
    res.end();
})

server.listen(8001);