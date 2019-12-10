const redisStore = require('koa-redis')


let REDIS_CFG = {};
let MYSQL_CFG = {};

REDIS_CFG = {
    cookie: {
        path: '/',
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    },
    store: redisStore({
        all: '127.0.0.1:6379'
    })
}

module.exports = {
    REDIS_CFG,
    MYSQL_CFG
}