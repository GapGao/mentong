exports.up = async function(knex) {
  await knex.schema.table('mentongs', function(table) {
    table.text('designated');
  });
};

exports.down = async function(knex) {
  await knex.schema.table('mentongs', function(table) {
    table.dropColumn('designated');
  });
};
