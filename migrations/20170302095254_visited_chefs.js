'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('visited_chefs', (table) => {
    table.increments();
    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').index();
    table.boolean('visit_chef1').notNullable().defaultTo(false);
    table.boolean('visit_chef2').notNullable().defaultTo(false);
    table.boolean('visit_chef3').notNullable().defaultTo(false);
    table.boolean('visit_chef4').notNullable().defaultTo(false);
    table.boolean('visit_chef5').notNullable().defaultTo(false);
    table.boolean('visit_chef6').notNullable().defaultTo(false);
    table.boolean('visit_chef7').notNullable().defaultTo(false);
    table.boolean('visit_chef8').notNullable().defaultTo(false);
    table.boolean('visit_chef9').notNullable().defaultTo(false);
    table.boolean('visit_chef10').notNullable().defaultTo(false);
    table.boolean('visit_chef11').notNullable().defaultTo(false);
    table.boolean('visit_chef12').notNullable().defaultTo(false);
    table.boolean('visit_chef13').notNullable().defaultTo(false);
    table.boolean('visit_chef14').notNullable().defaultTo(false);

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('visited_chefs');
};
