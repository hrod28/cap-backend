'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('votes').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('votes').insert({
          id: 1,
          user_id: 2,
          chef_id: 2
        }),
        knex('votes').insert({
          id: 2,
          user_id: 1,
          chef_id: 2
        })
        .then(() => {
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
      })
    ]);
  });
};
