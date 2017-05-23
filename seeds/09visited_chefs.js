
'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('thanks').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('thanks').insert({
          id: 1,
          thanks_name: 'thanks name',
          description: 'helped',
          photo_url: 'https://prostbrewing.com/wp-content/uploads/2016/12/prost-logo_45px.png',
          business_link: 'https://www.google.com/maps/place/Prost+Tasting+Room/@40.588187,-105.0765712,17z/data=!3m1!4b1!4m5!3m4!1s0x87694a8b45b93fab:0xc809e16aafced2ea!8m2!3d40.588187!4d-105.0743825',
        }),
        knex('thanks').insert({
          id: 2,
          thanks_name: 'thanks name',
          description: 'helped',
          photo_url: 'https://prostbrewing.com/wp-content/uploads/2016/12/prost-logo_45px.png',
          business_link: 'https://www.google.com/maps/place/Prost+Tasting+Room/@40.588187,-105.0765712,17z/data=!3m1!4b1!4m5!3m4!1s0x87694a8b45b93fab:0xc809e16aafced2ea!8m2!3d40.588187!4d-105.0743825',
        })
        .then(() => {
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
      })
    ]);
  });
};
