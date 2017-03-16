'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('chefs', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.string('restaurant').defaultTo('');
    table.string('paired_with').defaultTo('');
    table.string('serving_location').defaultTo('');
    table.string('photo_url').defaultTo('');



  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('chefs');
};
