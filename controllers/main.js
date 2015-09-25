import Router from 'koa-router'

let router = new Router()

// Home
router.get('/', function *() {
  yield this.render('home')
})

export default router
