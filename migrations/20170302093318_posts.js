'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', (table) => {
    table.increments();
    table.text('title').defaultTo('');
    table.text('description').defaultTo('');
    table.text('picture_url').defaultTo('');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
