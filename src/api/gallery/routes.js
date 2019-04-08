const Router = require('koa-router');
const controller = require('./controller');

const router = new Router();

router.get('/', async ctx => {
  const gallery = await controller.read();
  ctx.body = gallery;
});

router.get('/:id', async ctx => {
  const galleryItem = await controller.readOne(ctx.params.id);
  ctx.body = galleryItem;
});

router.post('/', async ctx => {
  const { name, type, path } = ctx.request.files.file;
  const data = { 
    name,
    type,
    src: path
  };
  const gallery = await controller.create({ data });
  ctx.body = gallery;
});

module.exports = router.routes();