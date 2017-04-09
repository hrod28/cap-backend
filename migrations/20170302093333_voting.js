'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('votes', (table) => {
    table.increments();
    table.text('map_photo').defaultTo('');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('votes');
};
