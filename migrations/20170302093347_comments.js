'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', (table) => {
    table.increments();
    table.text('time').defaultTo('');
    table.text('title').defaultTo('');
    table.text('description').defaultTo('');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
