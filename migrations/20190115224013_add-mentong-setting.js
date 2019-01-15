exports.up = async function(knex, Promise) {
  await knex.schema.table('mentongs', function(table) {
    table.integer('welcome_level');
  });
};

exports.down = async function(knex, Promise) {
  await knex.schema.table('mentongs', function(table) {
    table.dropColumn('welcome_level');
  });
};
