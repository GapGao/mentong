exports.up = async function(knex, Promise) {
  await knex.schema.table('mentongs', function(table) {
    table.text('welcome');
    table.text('thanks');
    table.text('follow');
    table.text('delayed_sending');
  });
};

exports.down = async function(knex, Promise) {
  await knex.schema.table('mentongs', function(table) {
    table.dropColumn('welcome');
    table.dropColumn('thanks');
    table.dropColumn('follow');
    table.dropColumn('delayed_sending');
  });
};
