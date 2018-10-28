/***
 * 
 * 封装公用的连接数据库方法
 * 
 *  */

const MongoClient = require('mongodb').MongoClient
const DbUrl = 'mongodb://127.0.0.1:27017/productmanage'
const ObjectID = require('mongodb').ObjectID

exports.ObjectID = ObjectID

function __connectDb(callback) {
    MongoClient.connect(DbUrl, function(err, db) {
        if(err) {
            console.log('数据库连接失败......')
            return
        }
        // 曾删改查
        callback(db)
    })
}

// 数据库查找
/**
 * 
 * @param collectionName  表名称
 * @param json  查询条件
 * @param callback  成功后回调函数
 */
exports.find = function(collectionName, json, callback) {
    __connectDb(function(db) {
        let result = db.collection(collectionName).find(json)
        result.toArray(function(error, data) {
            if(error) {
                console.log('查询数据出错......')
            }
            callback(error, data)
            db.close()
        })
    })
}


// 增加数据
exports.insert = function(collectionName, json, callback) {
    __connectDb(function(db) {
        db.collection(collectionName).insertOne(json, function(error, data) {
            callback(error, data)
        })
    })
}


// 修改数据
exports.update = function(collectionName, json1, json2, callback) {
    __connectDb(function(db) {
        db.collection(collectionName).updateOne(json1, {$set: json2}, function(error, data) {
            callback(error, data)
        })
    })
}


// 删除数据
exports.deleteOne = function(collectionName, json, callback) {
    __connectDb(function(db) {
        db.collection(collectionName).deleteOne(json, function(error, data) {
            callback(error, data)
        })
    })
}


