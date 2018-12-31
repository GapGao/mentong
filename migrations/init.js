
exports.up = async function (knex) {
  await knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('account').notNullable();
    table.string('password').notNullable();
    table.dateTime('expired_at');
    table.dateTime('created_at').defaultTo(knex.fn.now());
    table.dateTime('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('users');
};
