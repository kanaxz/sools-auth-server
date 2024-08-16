const modules = [
  require('./lib/init')
]

module.exports = {
  name: 'sools-management',
  dependencies: ['sools-modeling', 'mongo'],
  async construct(dependencies, config) {
    for (const module of modules) {
      await module(dependencies, config)
    }
  }
}