const router = require('koa-router')();
const addPraise_router = require('./addPraise_router');

router.use('/api', addPraise_router.routes(), addPraise_router.allowedMethods());

module.exports = router;