'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('brewers', (table) => {
    table.increments();
    table.text('name').notNullable().defaultTo('');
    table.text('brewery').defaultTo('');
    table.text('brewery_logo').defaultTo('');
    table.text('featured_drink').defaultTo('');
    table.text('description').defaultTo('');
    table.text('serving_location').defaultTo('');
    table.text('photo_url').defaultTo('');
    table.text('brewery_url').defaultTo('');



  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('brewers');
};
