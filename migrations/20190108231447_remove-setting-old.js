exports.up = async function(knex, Promise) {
  await knex.schema.table('mentongs', function(table) {
    table.dropColumn('welcome_prefix');
    table.dropColumn('welcome_postfix');
    table.dropColumn('thanks_prefix');
    table.dropColumn('thanks_postfix');
    table.dropColumn('follow_prefix');
    table.dropColumn('follow_postfix');
    table.dropColumn('delayed_sending_msg');
    table.dropColumn('delayed_sending_minutes');
  });
};

exports.down = async function(knex, Promise) {
  await knex.schema.table('mentongs', function(table) {
    table.string('welcome_prefix');
    table.string('welcome_postfix');
    table.string('thanks_prefix');
    table.string('thanks_postfix');
    table.string('follow_prefix');
    table.string('follow_postfix');
    table.string('delayed_sending_msg');
    table.integer('delayed_sending_minutes');
  });
};
