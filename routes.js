const exp = require('express')
const Sessions = require('./Sessions')
const { User } = require('sools-auth')

module.exports = {
  after: Sessions,
  dependencies: [
    require('sools-express'),
  ],
  async construct({ express }) {
    const router = exp.Router()

    const getUser = async (req) => {
      if (!req.session?.userId) {
        return null
      }

      const user = await User.collection.findOne(req, {
        _id: req.session.userId
      })

      return user
    }

    express.use(async (req, res, next) => {
      const user = await getUser(req)
      req.user = user
      return next()
    })

    express.use('/api/auth', router)

    router.post('/logout', async (req, res) => {
      delete req.session.userId
      delete req.user

      res.json({
        success: true,
      })
    })
  }
}