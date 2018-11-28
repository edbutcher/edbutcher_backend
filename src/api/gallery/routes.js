const router = require('koa-router')()
const controller = require('./controller')
const config = require('configuration')

const dest = `${config.get('UPLOAD_FOLDER')}gallery/`

router.get('/', async ctx => {
  const gallery = await controller.read()
  ctx.body = gallery
})

router.post('/', async ctx => {
  // const data = {}
  // const gallery = await controller.create({ data })

  const { name, type, path } = ctx.request.files.file;
  console.log(name, type, path);
  
  ctx.body = JSON.stringify(ctx.request.files, null, 2);
})

router.get('/:id', (ctx, next) => {
  const { id } = ctx.params

  ctx.body = ctx.params
});

module.exports = router.routes()