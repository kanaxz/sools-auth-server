const { Group } = require('sools-management')

module.exports = {
  dependencies: ['modeling'],
  async construct({ modeling }) {
    modeling.controller(Group, {

    })
  }
}