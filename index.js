const UserCollection = require('./UserCollection')
const User = require('sools-auth/User')

module.exports = module.exports = {
  name: 'auth',
  dependencies: [
    require('sools-mongo'),
    require('sools-modeling-server'),
    require('sools-express-mongo-session'),
  ],
  modules: [
    require('./routes'),
  ],
  construct({ modeling, mongo }, config) {
    const providers = []
    modeling.map.unshift([User, (type, controllers) => new UserCollection(type, mongo.db, controllers, config)])

    return {
      providers,
    }
  }
}