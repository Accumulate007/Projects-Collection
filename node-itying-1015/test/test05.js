/**
 * fs模块
 */
const http = require('http')
const data = require('./data.js')
const fs = require('fs')


fs.stat('data.js', (error, stats) => {
    if(error) {
        console.log(error)
        return false
    }

    console.log(stats.isFile())
})

fs.mkdir('createByFS', function (err) {
    if(err) {
        console.log(err)
        return false;
    }
    console.log('创建文件夹成功...')
})

fs.writeFile('t1.txt', 't1 txt content...', function (err) {
    if(err) {
        console.log(err)
        return false
    }
    console.log('写入文件成功')
})

// 获取目录下的文件和文件夹
fs.readdir('createByFS', function (err, data) {
    if(err) {
        console.log(err)
        return false
    }
    console.log(data)
})



/**
 * 流的方式读取文件
 */

let readStream = fs.createReadStream('t1.txt')
let rd = '';

// 读取完成
readStream.on('data', function (chunk) {
    rd += chunk;
})

readStream.on('end', function (chunk) {
    console.log(chunk);
})





http.createServer(function (request, response) {

    response.writeHead(200, {"Content-Tpye": "text/html:charset='utf-8'"});
    response.write(data.str + '\n' + data.date);
    response.end();
}).listen(8001, '127.0.0.1');


