'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', (table) => {
    table.increments();
    table.string('user_id').notNullable().defaultTo('');
    table.string('chef_id').defaultTo('');
    table.string('comment_body').notNullable().defaultTo('');
    table.string('post_id').defaultTo('');


  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
