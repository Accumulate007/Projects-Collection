## 课程涉及内容
1.NodeJS模块: http,url,fs
2.项目开发常用中间件: cookie-parser,body-parser,express-session,multiparty,md5-node
3.Ejs模板引擎的使用
4.express的使用
5.mongodb数据的连接，使用
6.模块化开发，代码的分隔组织

### lesson-01
NoodeJS是单线程的

### lesson-02: http模块、url模块
传统的PHP等语言，需要借用apache,nginx等http服务器。NodeJS自带了http模块，可以实现http功能
使用supervisor实现代码文件变更的自动重启

### lesson-03: CommonJS和NodeJS中自定义模块

### lesson-04: npm,package.json和第三方模块安装
```
npm -v      // 查看当前npm的版本
npm list    // 查看当前安装的npm依赖
npm install vue -S // 将依赖安装到生产环境依赖(或者是  npm install vue --save)
npm install vue -D // 将依赖安装到开发环境依赖(或者是  npm install vue --save-dev)
```
```
"dependencies":{
    "ejs": "^2.3.4",        // ^表示第一位版本号不变，后面两位取最新的
    "express: "~4.13.3",    // ~表示前两位不变，最后一个取最新的
    "formidable": "*1.0.17" // *表示全部都取最新的
}
```

### lesson-05: fs模块
```
const fs = require('fs')

fs.stat        // 检测是文件还是目录
fs.mkdir        // 创建目录
fs.writeFile    // 创建写入文件
fs.appendFile   // 追加文件
fs.readFile     // 读取文件
fs.readdir      // 读取目录
fs.rename       // 重命名
fs.rmdir        // 删除目录(文件夹)
fs.unlink       // 删除文件
```

### lesson-06: 创建一个web服务

### lesson-07: 非阻塞io

### lesson-08: 静态文件托管、Get,Post路由

### lesson-09: 仿照Express封装路由模块

### lesson-10: MongDb
什么时候使用NoSQL
1.对数据库高并发读写需求
2.对海量数据的高效率存储和访问的需求
3.对数据库的高可扩展性和高可用性的需求

非结构型数据库，没有行、列的概念，用JSON来存储数据

启动数据库：
mongod --dbpath D:\mongodata

连接本地mongodb数据库:
mongo

连接远程mongodb数据库：
mongo 127.0.0.1:8001

查看数据库列表：
show dbs

创建(或使用)一个数据库：
use hangzhou

创建数据库后，需要创建表(集合)，不需要特意创建，只需要向表(集合)中写入数据，会自动生成：
db.user.insert({"name": "xihu"})

查看一个数据库中有哪些表：
show collections

查询某张表里的数据：
db.表名.find()

### lesson-11: nodejs中使用mongodb
npm install mongodb --D

### lesson-12: express
1.cookie的使用
2.C盘->Windows->System32->drivers->etc文件可以配置计算机域名
3.cookie的加密
4.使用cookie保存浏览记录

### lesson-13: express-session中间件的使用

### lesson-14: express+mongoDB打造商城系统
1.使用md5-node进行用户名密码的加密
2.图片上传插件 multiparty
3.使用express.Router()进行项目的模块化改造
