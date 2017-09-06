const router = require('koa-router')();
const addPraise = require('../../api/addPraise_api');

router.get('/addOnce', addPraise.addOnce);

module.exports = router;