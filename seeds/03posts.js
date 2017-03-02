'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('posts').insert({
          id: 1,
          user_id: 2,
          post_body: 'Does anyone know where the awards ceremony will be held?'
        }),
        knex('posts').insert({
          id: 2,
          user_id: 1,
          post_body: 'anyone looking for something spicy, hit up the firey pepper booth!!',
        })
        .then(() => {
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
      })
    ]);
  });
};
