const router = require('koa-router')()
const users = require('api/users/routes')
const gallery = require('api/gallery/routes')

// temporary solution
router.use('/users', users)
router.use('/gallery', gallery)

module.exports = router