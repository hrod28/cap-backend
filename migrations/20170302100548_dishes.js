'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', (table) => {
    table.increments();
    table.integer('chef_id').references('id').inTable('chefs').onDelete('CASCADE').index();
    table.string('plate_name').notNullable().defaultTo('');
    table.string('description').defaultTo('');
    table.string('ingredients').notNullable('').defaultTo('');
    table.string('photo_url').defaultTo('');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dishes');
};
