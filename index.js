const UserCollection = require('./UserCollection')

module.exports = module.exports = {
  name: 'auth',
  dependencies: [
    require('sools-core-server'),
    require('sools-mongo'),
  ],
  modules: [
    require('./Sessions')
  ],
  construct({ modeling, mongo }, config) {
    modeling.map.unshift([User, (type, controllers) => new UserCollection(type, mongo.db, controllers, config)])
  }
}