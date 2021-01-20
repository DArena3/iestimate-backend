const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('email')
    .unique()
    .notNullable()

  table.string('username').notNullable()

  table.string('password').notNullable()

  table.string('firstName').notNullable()
  table.string('lastName').notNullable()

  table.float('accuracy').notNullable().defaultTo(0)

  table.timestamp('createdAt').defaultTo(knex.fn.now())
  table.timestamp('updatedAt').defaultTo(knex.fn.now())

  table.integer('gamesPlayed').defaultTo(0)
})


exports.down = async knex => knex.schema.dropTableIfExists('users')
