'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('dishes').insert({
          id: 3,
          chef_id: 1,
          plate_name: 'untasty tacos',
          description: 'hand-made taco shells filled with stuff',
          ingredients: 'beef, cilantro, butter, peanuts',
          photo_url: 'http://www.tacobueno.com/media/1339/beeftacolarge.png?quality=65'
        }),
        knex('dishes').insert({
          id: 4,
          chef_id: 2,
          plate_name: 'red burritos',
          description: 'gross kale wrapped in a spinach tortilla',
          ingredients: 'kale, spinach tortilla',
          photo_url: 'https://i2.wp.com/www.passionlatincuisine.com/wp-content/uploads/2016/04/f_Green-Burrito-01.jpeg?w=800'
        })
        .then(() => {
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
      })
    ]);
  });
};
