
exports.up = function(knex, Promise) {
  console.log('create table')
  return Promise.all([
      knex.schema.createTableIfNotExists('questions', function(table) {
        table.increments('id').primary()
        table.string('name')
        table.boolean('started')
        table.timestamps()
      }),
      knex.schema.createTableIfNotExists('options', function(table) {
        table.increments('id').primary()
        table.string('name')
        table.integer('votes')
        table.integer('question_id').references('id').inTable('questions')
        table.timestamps()
      })
    ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('questions'),
    knex.schema.dropTableIfExists('options')
  ])
}
