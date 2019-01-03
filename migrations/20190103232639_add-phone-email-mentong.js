exports.up = async function(knex, Promise) {
  await knex.schema.table('mentongs', function(table) {
    table.string('phone');
    table.string('email');
  });
};

exports.down = async function(knex, Promise) {
  await knex.schema.table('mentongs', function(table) {
    table.dropColumn('phone');
    table.dropColumn('email');
  });
};
