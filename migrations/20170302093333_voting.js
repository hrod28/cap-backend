'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('votes', (table) => {
    table.increments();
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').index();
    table.integer('chef_id').references('id').inTable('chefs').onDelete('CASCADE').index();

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('votes');
};
