const sd = require('silly-datetime')
const http = require('http')


let nowTime = sd.format(new Date(), 'YYYY-MM-DD HH:mm')


http.createServer(function (request, response) {

    response.writeHead(200, {"Content-Tpye": "text/html:charset='utf-8'"});
    response.write('Today is : ' + nowTime);
    response.end();
}).listen(8001, '127.0.0.1');

