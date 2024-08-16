const { Group } = require('sools-management')

module.exports = {
  dependencies: ['sools-modeling'],
  async construct({ modeling }) {
    modeling.controller(Group, {

    })
  }
}