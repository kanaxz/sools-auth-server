const MongoCollection = require('sools-mongo/MongoCollection')
const { defaultLoad } = require('sools-auth/utils')

module.exports = class StorageCollection extends MongoCollection {

  static methods = [
    ...MongoCollection.methods,
    'me',
  ]

  async me(context) {
    return context.user
  }
}