'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('votes', (table) => {
    table.increments();
    table.string('user_id').notNullable().defaultTo('');
    table.string('chef_id').notNullable().defaultTo('');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('votes');
};
