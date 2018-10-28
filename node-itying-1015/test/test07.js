/**
 * 非阻塞IO
 * 
 * PHP或.net等服务器语言，会为每一个客户端连接创建一个新的线程，而每个线程大概需要2M的内存，硬件成本比较高。
 * NodeJS不为每个客户连接创建新的线程，而是仅仅使用一个线程，有用户连接就触发一个内部事件。NodeJS的高并发能力很好
 */

const fs = require('fs')

const events = require('events')

console.log(events)

let EventEmitter = new events.EventEmitter();

// 接听广播
EventEmitter.on('to_parent', function (data) {
    console.log(data)
})

setTimeout(function () {
    EventEmitter.emit('to_parent', 'to parent data')
}, 2000)




