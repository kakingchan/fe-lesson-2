const router = require('koa-router')();
const addPraise = require('../../controllers/addPraise_api');

router.get('/addOnce', addPraise.index);

module.exports = router;