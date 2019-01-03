exports.up = async function(knex, Promise) {
  await knex.schema.createTable('mentongs', (table) => {
    table.increments();
    table.integer('user_id');
    table.string('token');
    table.string('qiyi_uid');
    table.string('user_name');
    table.string('nick_name');
    table.boolean('status').defaultTo(false);
    table.dateTime('login_at');
    table.boolean('is_current').defaultTo(false);
    table.text('login_info');
    table.string('auth_cookie');
    table.string('device_id');
    table.string('action_auth');
    table.string('room_id');
    table.string('welcome_prefix');
    table.string('welcome_postfix');
    table.string('thanks_prefix');
    table.string('thanks_postfix');
    table.string('delayed_sending_msg');
    table.integer('delayed_sending_minutes');
    table.dateTime('created_at').defaultTo(knex.fn.now());
    table.dateTime('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTableIfExists('mentongs');
};
