/**
 * npm,package.json
 */
const http = require('http')
const data = require('./data.js')



http.createServer(function (request, response) {

    response.writeHead(200, {"Content-Tpye": "text/html:charset='utf-8'"});
    response.write(data.str + '\n' + data.date);
    response.end();
}).listen(8001, '127.0.0.1');
