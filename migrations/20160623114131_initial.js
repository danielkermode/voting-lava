
exports.up = function(knex, Promise) {
  console.log('create table')
  return knex.schema.createTableIfNotExists('questions', function(table) {
    table.increments('id')
    table.string('name')
    table.string('year_debuted')
    table.string('year_disbanded')
    table.timestamps()
  })
};

exports.down = function(knex, Promise) {

};
