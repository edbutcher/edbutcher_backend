const router = require('koa-router')()
const controller = require('./controller')
const config = require('configuration')
const koaBody = require('koa-body')

const dest = `${config.get('UPLOAD_FOLDER')}gallery/`

router.get('/', async ctx => {
  const gallery = await controller.read()
  ctx.body = gallery
})

router.post(
  '/', 
  koaBody({
    multipart: true,
    formidable: { 
      uploadDir: 'uploads/gallery/', 
      keepExtensions: true 
    }
  }), 
  async ctx => {
  // const data = {}
  // const gallery = await controller.create({ data })  // Add information into DB

  // ctx.body = { key, url };

  // const { name, type, path } = ctx.request.files.file;
  // console.log(name, type, path);
  
  ctx.body = JSON.stringify(ctx.request.files, null, 2);
})

router.get('/:id', (ctx, next) => {
  const { id } = ctx.params

  ctx.body = ctx.params
});

module.exports = router.routes()