const url = require('url')


const Route = function() {

    let G = this

    // 处理get和post请求,分开注册
    this._get = {}
    this._post = {}
    let app = function(req, res) {
        let pathname = url.parse( req.url ).pathname
        if(!pathname.endsWith('/')) {
            pathname += '/'
        }

        // 获取请求方式
        let method = req.method.toLowerCase()

        if(G['_'+method][pathname]) {
            if(method === 'post') {
                let postStr = ''
                req.on('data', function(chunk) {
                    postStr += chunk
                })
                req.on('end', function(err, chunk) {
                    req.body = postStr
                    G['_'+method][pathname](req, res)
                })
            }else{  // get请求
                G['_'+method][pathname](req, res)
            }
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
        G._get[string] = callback
    }

    app.post = function(string, callback) {
        if(!string.endsWith('/')) {
            string += '/'
        }
        if(!string.startsWith('/')) {
            string = '/' + string
        }
        G._post[string] = callback
    }

    return app
}

module.exports = Route()
