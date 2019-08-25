const router = require('express').Router()
const { yuuvisController } = require('../../controllers')

router.route('/store').post(yuuvisController.store)

router.route('/get').post(yuuvisController.search)

module.exports = router
