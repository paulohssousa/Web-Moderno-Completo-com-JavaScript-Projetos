const config = require('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([config]) //cuidado!
module.exports = knex