'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', (table) => {
    table.increments();
    table.string('chef_id').notNullable().defaultTo('');
    table.string('plate_name').notNullable().defaultTo('');
    table.string('description').defaultTo('');
    table.string('ingredients').notNullable('').defaultTo('');
    table.string('photo_url').defaultTo('');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dishes');
};
