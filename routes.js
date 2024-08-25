const exp = require('express')
const Sessions = require('./Sessions')

module.exports = {
  after: Sessions,
  dependencies: [
    Sessions,
    require('sools-express'),
  ],
  async construct({ sessions, express }) {
    const router = exp.Router()
    express.use('/api/auth', router)

    router.post('/logout', async (req, res) => {
      if (req.user) {
        await sessions.destroy(req, res)
      }

      res.json({
        success: true,
      })
    })
  }
}