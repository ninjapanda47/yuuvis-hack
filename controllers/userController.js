const { UserModel } = require('../models')
const { encryptPassword, comparePassword } = require('../util/bcrypt')
const { getToken } = require('../util/token')

module.exports = {
  addUser: async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const username = req.body.username
    const password = await encryptPassword(req.body.password)
    const createdOn = new Date()

    const newUser = await new UserModel({
      name, email, username, password, createdOn
    })

    const token = await getToken(newUser)

    newUser.save(err => {
      if (err) {
        res.status(400).send({ 
          success: false, 
          message: `Something went wrong: ${err}`
        })
      }
      res.status(200).send({ 
        success: true, 
        message: 'User added successfully',
        user: newUser,
        token
      })
    })
  },
  login: async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const user = await UserModel.findOne({ username })

    if (!user) {
      res.status(200).send({
        success: false,
        message: `We couldn't find that username in our system...`
      })
    }

    const validPassword = await comparePassword(password, user.password)

    if (validPassword) {
      const token = await getToken(user)
      res.status(200).send({
        user,
        token,
        success: true,
        message: 'User logged in successfully'
      })
    } else {
      res.status(200).send({
        success: false,
        message: `That doesn't seem to be the correct password...`
      })
    }
  }
}