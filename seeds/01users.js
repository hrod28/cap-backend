'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          id: 1,
          first_name: 'Heidi ',
          last_name: 'Heidi Rodriguez',
          username: 'hrod28',
          password: 'chewey28',
          email: 'hrod2645@gmail.com',
          visited_all: true,
          vote1: 'tacos',
          vote2: 'burgers',
          is_admin: true
        }),
        knex('users').insert({
          id: 2,
          first_name: 'Cleo',
          last_name: 'rod',
          username: 'hrod28',
          password: 'chewey28',
          email: 'hrodcleo@gmail.com',
          visited_all: false,
          vote1: 'burgers',
          vote2: 'burgers',
          is_admin: true
        }),
        knex('users').insert({
          id: 3,
          first_name: 'Matt ',
          last_name: 'Smellison',
          username: 'hrod28',
          password: 'chewey28',
          email: 'matt@gmail.com',
          visited_all: false,
          vote1: 'burgers',
          vote2: 'burgers',
          is_admin: true
        })
        .then(() => {
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
      })
    ]);
  });
};
