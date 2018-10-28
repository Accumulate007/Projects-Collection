
const http = require('http')
const ejs = require('ejs')
const app = require('./model/express-route.js')
const MongoClient = require('mongodb').MongoClient
const urlPath = 'mongodb://127.0.0.1:27017/student'     // student是mongo数据库里的某个数据库
const url = require('url')


http.createServer(app).listen(3000)


app.get('/', function(req, res) {
    let msg = 'this is data, 10-23'
    res.write(msg)
    res.end()
})

app.get('/add', function(req, res) {
    // 增
    MongoClient.connect(urlPath, function(err, db) {
        if(err) {
            console.log(err)
            console.log('数据库连接失败......')
            return
        }

        // article是student数据库下的某张表(集合)
        db.collection("article").insertOne({
            "id": 1,
            "name": "李四",
            "age": 23
        }, function(error, result) {
            if(error) {
                console.log('增加数据失败')
            }else{
                res.send('增加数据成功！')
                db.close()
            }
        })
    })
})

app.get('/edit', function(req, res) {
    // 改
    MongoClient.connect(urlPath, function(err, db) {
        if(err) {
            console.log(err)
            console.log('数据库连接失败......')
            return
        }

        db.collection("article").updateOne({"id": 0}, {$set:{
            "age": 23
        }} ,function(error, result) {
            if(error) {
                console.log('修改数据失败')
            }else{
                res.send('修改数据成功！')
                db.close()
            }
        })
    })
})

app.get('/delete', function(req, res) {
    // 删

    let query = url.parse(req.url, true).query
    MongoClient.connect(urlPath, function(err, db) {
        if(err) {
            console.log(err)
            console.log('删除库连接失败......')
            return
        }

        // db.collection("article").deleteOne({"id": 0}, function(error, result) {
        //     if(error) {
        //         console.log('修改数据失败')
        //     }else{
        //         res.send('修改数据成功！')
        //         db.close()
        //     }
        // })
    })
})
