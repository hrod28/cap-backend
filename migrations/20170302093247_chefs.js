'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('chefs', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.string('about').notNullable().defaultTo('');
    table.string('restaurant').defaultTo('');
    table.string('favorite_dish');
    table.string('quote').defaultTo('');
    

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('chefs');
};
