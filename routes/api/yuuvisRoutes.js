const router = require('express').Router()
const { yuuvisController } = require('../../controllers')

router.route('/store').post(yuuvisController.store)

router.route('/get').get(yuuvisController.get)

module.exports = router
