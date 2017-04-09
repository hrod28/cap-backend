'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('visited_chefs', (table) => {
    table.increments();
    table.text('thanks_name').defaultTo('');
    table.text('description').defaultTo('');
    table.text('business_link').defaultTo('');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('visited_chefs');
};
