const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/session-test', async function (ctx, next) {
  if(ctx.session.viewCount == null){
    ctx.session.viewCount = 0
  }
  ctx.session.viewCount++
  ctx.body = {
    errno : 0,
    viewCount:ctx.session.viewCount
  }
})

module.exports = router
