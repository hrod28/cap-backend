'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('comments').insert({
          id: 1,
          user_id: 2,
          chef_id: 1,
          comment_body: 'Full of Flavor!!'
        }),
        knex('comments').insert({
          id: 2,
          user_id: 1,
          chef_id: 1,
          comment_body: 'Best burger I\'ve had all day!!'
        }),
        knex('comments').insert({
          id: 3,
          user_id: 2,
          chef_id: 1,
          comment_body: 'This burger is a work of fine art!!'
        }),
        knex('comments').insert({
          id: 4,
          user_id: 1,
          comment_body: 'I think the awards ceremony will be held at the Family Center',
          post_id: 1
        }),
        knex('comments').insert({
          id: 5,
          user_id: 2,
          chef_id: 2,
          comment_body: 'the salsa was too hot for me!'

        })
        .then(() => {
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
      })
    ]);
  });
};
