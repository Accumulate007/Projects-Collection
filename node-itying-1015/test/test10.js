/**
 * 模块封装路由
 */

const http = require('http')
const url = require('url')
const model = require('./model.js')


const app = http.createServer(function (req, res) {

    let pathname = url.parse( req.url ).pathname.replace('/', '')
    console.log(pathname)

    if(pathname !== 'favicon.ico') {
        try{
            model[pathname](req, res)
        }catch(e) {
            model['home'](req, res)
        }
    }


})


app.listen(8001)
