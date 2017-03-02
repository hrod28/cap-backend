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
          is_admin: true
        }),
        knex('users').insert({
          id: 2,
          first_name: 'Matthew',
          last_name: 'Ellison',
          username: 'googie',
          password: 'cleo',
          email: '',
          is_admin: true
        })
        .then(() => {
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
      })
    ]);
  });
};
