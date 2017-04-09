'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('votes').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('votes').insert({
          id: 1,
          map_photo: 'http://pedalfortcollins.com/wp-content/uploads/2015/09/Mid-town_clipping.jpg'
        })
        .then(() => {
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
      })
    ]);
  });
};
