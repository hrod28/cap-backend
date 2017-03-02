'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('visited_chefs', (table) => {
    table.increments();
    table.string('user_id').notNullable().defaultTo('');
    table.boolean('visit_chef1').notNullable();
    table.boolean('visit_chef2').notNullable();
    table.boolean('visit_chef3').notNullable();
    table.boolean('visit_chef4').notNullable();
    table.boolean('visit_chef5').notNullable();
    table.boolean('visit_chef6').notNullable();
    table.boolean('visit_chef7').notNullable();
    table.boolean('visit_chef8').notNullable();
    table.boolean('visit_chef9').notNullable();
    table.boolean('visit_chef10').notNullable();
    table.boolean('visit_chef11').notNullable();
    table.boolean('visit_chef12').notNullable();
    table.boolean('visit_chef13').notNullable();
    table.boolean('visit_chef14').notNullable();

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('visited_chefs');
};
