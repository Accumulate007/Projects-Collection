const url = require('url')
const http = require('http')

let u1 = 'http://www.baidu.com/news';

let r1 = url.resolve(u1, 'test');
console.log(r1);    // http://www.baidu.com/test

http.createServer(function (request, response) {

    let URL = request.url;
    let parseUrl = url.parse(URL, true);    // 第二个参数为true,表示将get传值转换成对象

    response.writeHead(200, {"Content-Tpye": "text/html:charset='utf-8'"});
    response.write('...The url is: ' + JSON.stringify(parseUrl, null, 2)); // 缩进2个空格并格式化
    response.end(); // 用于结束响应
}).listen(8001);


/**
 * url模块的解析作用
 * url.parse('http://www.baidu.com/news?name=jack&age=38')
 * Url {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'www.baidu.com',
    port: null,
    hostname: 'www.baidu.com',
    hash: null,
    search: '?name=jack&age=38',
    query: 'name=jack&age=38',
    pathname: '/news',
    path: '/news?name=jack&age=38',
    href: 'http://www.baidu.com/news?name=jack&age=38' }
    >
 */

/**
 * url.resolve()的作用
 * url.resolve('http://www.baidu.com/news', 'house')
 */
