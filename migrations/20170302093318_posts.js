'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', (table) => {
    table.increments();
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').index();
    table.string('post_body').notNullable().defaultTo('');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
