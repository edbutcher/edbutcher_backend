const Koa = require('koa')
const router = require('routing')
const koaBody = require('koa-body')
const logger = require('koa-morgan')
const responseTime = require('koa-response-time')
const database = require('database')

const app = new Koa()

app
  .use(responseTime())
  .use(logger('combined'))
  .use(koaBody())
  .use(router.routes())
  .use(ctx => ctx.type = 'json')

exports.start = async () => {
  try {
    await database.connect()
    console.log('Connected to database')
    const port = 9000
    await app.listen(port)
    console.log(`Connected on http://localhost:${port}`)
  } catch (error) {
    console.log('Something went wrong')
    console.log(error)
  }
}