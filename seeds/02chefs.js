'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chefs').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('chefs').insert({
          id: 1,
          name: 'master chef',
          about: 'I have been cooking for 20 years.  I like dogs',
          restaurant: 'The hungry hamburger',
          favorite_dish: 'pizza',
          quote: 'if you can\'t stand the heat, get out of the kitchen'
        }),
        knex('chefs').insert({
          id: 2,
          name: 'Joe Chef',
          about: 'I only cook steaks!',
          restaurant: 'the meat restaurant',
          favorite_dish: 'cream cheese',
          quote: 'A best friend is like a four leaf clover, hard to find, lucky to have.'
        })
        .then(() => {
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
      })
    ]);
  });
};
