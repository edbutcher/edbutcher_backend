const Router = require('koa-router');
const gallery = require('api/gallery/routes');

const router = new Router();

router.use('/', gallery);

module.exports = router;