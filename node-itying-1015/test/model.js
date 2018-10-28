/**
 * 模块化方法封装路由
 */

const app = {
    login: function(req, res) {
        res.end('login......')
    },
    register: function(req, res) {
        res.end('register......')
    },
    home: function(req, res) {
        res.end('404 not found from home!!!')
    }
}



module.exports = app;