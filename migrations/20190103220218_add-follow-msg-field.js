exports.up = async function(knex, Promise) {
  await knex.schema.table('mentongs', function(table) {
    table.string('follow_prefix');
    table.string('follow_postfix');
  });
};

exports.down = async function(knex, Promise) {
  await knex.schema.table('mentongs', function(table) {
    table.dropColumn('follow_prefix');
    table.dropColumn('follow_postfix');
  });
};
