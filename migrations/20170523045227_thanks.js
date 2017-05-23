exports.up = function(knex, Promise) {
  return knex.schema.createTable('thanks', (table) => {
    table.increments();
    table.text('thanks_name').defaultTo('');
    table.text('description').defaultTo('');
    table.text('photo_url').defaultTo('');
    table.text('business_link').defaultTo('');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('thanks');
};
