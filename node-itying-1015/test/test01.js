const http = require('http')

http.createServer(function (request, response) {
    // request：获取URL信息
    // response：给浏览器返回响应信息

    response.writeHead(200, {"Content-Tpye": "text/html:charset='utf-8'"});
    response.write('Hello, NodeJS, 2018-10-15.');
    response.end(); // 用于结束响应
}).listen(8001);

