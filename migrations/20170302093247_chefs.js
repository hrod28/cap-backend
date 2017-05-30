'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('chefs', (table) => {
    table.increments();
    table.text('name').notNullable().defaultTo('');
    table.text('restaurant').defaultTo('');
    table.text('restaurant_logo').defaultTo('');
    table.text('paired_with').defaultTo('');
    table.text('paired_logo').defaultTo('');
    table.text('serving_location').defaultTo('');
    table.text('serving_photo').defaultTo('');
    table.text('photo_url').defaultTo('');
    table.text('restaurant_url').defaultTo('');



  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('chefs');
};
