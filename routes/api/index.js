const router = require('express').Router()
const userRoutes = require('./userRoutes')
const yuuvisRoutes = require('./yuuvisRoutes')

router.use('/users', userRoutes)
router.use('/yuuvis', yuuvisRoutes)

module.exports = router
