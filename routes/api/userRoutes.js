const router = require('express').Router()
const { userController } = require('../../controllers')

router.route('/').post(userController.addUser)

router.route('/login').post(userController.login)

module.exports = router