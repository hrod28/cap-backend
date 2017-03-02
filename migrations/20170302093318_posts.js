'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', (table) => {
    table.increments();
    table.string('user_id').notNullable().defaultTo('');
    table.string('post_body').notNullable().defaultTo('');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
