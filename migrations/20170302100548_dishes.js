'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', (table) => {
    table.increments();
    //table.integer('chef_id').references('id').inTable('chefs').onDelete('CASCADE').index();
    table.text('plate_name').notNullable().defaultTo('');
    table.text('prepared_by').notNullable().defaultTo('');
    table.text('description').defaultTo('');
    table.text('ingredients').notNullable('').defaultTo('');
    table.text('photo_url').defaultTo('');
    table.text('paired_with').defaultTo('');
    table.text('paired_logo').defaultTo('');
    table.text('paired_with_desc').defaultTo('');
    table.text('servedfrom').defaultTo('');
    table.text('servedfrom_logo').defaultTo('');
    table.text('location_url').defaultTo('');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dishes');
};
