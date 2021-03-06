// router.js

const path = require('path')
const url = require('url')

function router(req, res, staticpath) {
    let pathname = request.url;

    if(pathname === '/') pathname = 'index.html';  // 默认加载首页

    // 获取文件的后缀名
    let extname = path.extname(pathname)

    if(pathname !== '/favicon.ico') {   // 过滤请求
    fs.readFile('./createByFS/' + pathname, function (err, result) {
            if(err) {
                // 读取不到文件
                fs.readFile('./createByFS/404.html', function (err,data404) {
                    response.writeHead(404, {"Content-Tpye": "text/html:charset='utf-8'"});
                    response.write(data404)
                    response.end()
                })
                return;
            }
            let mime = utils.getMime(extname)
            response.writeHead(200, {"Content-Tpye": ""+mime+":charset='utf-8'"});
            response.write(result)
            response.end()
        })
    }
}


module.exports = router;
