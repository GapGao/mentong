
exports.up = async function(knex, Promise) {
  await knex.schema.createTable('invite_codes', (table) => {
    table.increments();
    table.string('code').notNullable();
    table.boolean('valid').defaultTo(true);
    table.dateTime('expired_at');
    table.dateTime('created_at').defaultTo(knex.fn.now());
    table.dateTime('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });
};

exports.down = function(knex, Promise) {
  await knex.schema.dropTableIfExists('invite_codes');
};
