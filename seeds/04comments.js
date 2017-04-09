'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('comments').insert({
          id: 1,
          time: '2pm',
          title: 'Competition',
          description: 'olor sit amet, consectetur adipiscing elit, sed do'
        }),
        knex('comments').insert({
          id: 2,
          time: '4pm',
          title: 'Band Plays',
          description: 'olor sit amet, consectetur adipiscing elit, sed do'
        }),
        knex('comments').insert({
          id: 3,
          time: '6-8pm',
          title: 'Silent Auction',
          description: 'olor sit amet, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sed do'
        }),
        knex('comments').insert({
          id: 4,
          time: '8-?',
          title: 'Party the night away',
          description: 'olor sit amet, consectetur adipiscingDui cupidatat non proident elit, sed do'
        })
        .then(() => {
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
      })
    ]);
  });
};
