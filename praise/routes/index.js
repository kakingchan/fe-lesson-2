const router = require('koa-router')()

router.get('/', async(ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
})

router.get('/index/index', async(ctx, next) => {
    await ctx.render('index.html')
})


module.exports = router