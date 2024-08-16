const { User } = require('sools-management')
const UserCollection = require('./UserCollection')

module.exports = ({ modeling, mongo }, config) => {
  modeling.map.unshift([User, (type, controllers) => new UserCollection(type, mongo.db, controllers, config)])
}