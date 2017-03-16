'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('first_name').defaultTo('');
    table.string('last_name').defaultTo('');
    table.string('username').defaultTo('');
    table.string('password').defaultTo('');
    table.string('email').defaultTo('');
    table.string('address').defaultTo('');
    table.string('zip_code').defaultTo('');
    table.string('city').defaultTo('');
    table.boolean('is_admin').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
