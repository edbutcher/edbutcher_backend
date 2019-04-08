const Koa = require('koa');
const router = require('routing');
const bodyParser = require('koa-body');
const logger = require('koa-morgan');
const responseTime = require('koa-response-time');
const cors = require('@koa/cors');
const mount = require('koa-mount');
const serve = require('koa-static');
const path = require('path');

const database = require('database');
const config = require('configuration');

const UPLOAD_FOLDER = config.get('UPLOAD_FOLDER');
const port = 9000;

const app = new Koa();

app.use(responseTime());

app.use(logger('combined'));

app.use(bodyParser({
    formidable: {
      uploadDir: UPLOAD_FOLDER,
      maxFieldsSize: 100 * 1024 * 1024,
      keepExtensions: true
    },
    multipart: true,
    urlencoded: true
   }));

app.use(cors());

app.use(mount(UPLOAD_FOLDER, serve(path.join(__dirname + '/../..' + UPLOAD_FOLDER))));

app.use(mount('/gallery', router.middleware()));

app.use(ctx => ctx.type = 'json');

exports.start = async () => {
  try {
    await database.connect()
    console.log('Connected to database');
    await app.listen(port);
    console.log(`Connected on http://localhost:${port}`);
  } catch (error) {
    console.log('Something went wrong', error);
  }
};