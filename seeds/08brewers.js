'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('brewers').insert({
          id: 1,
          name: 'Brewer\'s name',
          brewery: 'Prost',
          brewery_logo: 'https://prostbrewing.com/wp-content/uploads/2016/12/prost-logo_45px.png',
          featured_drink: 'Doppelbock',
          description: 'Doppelbock means “Double Bock” and is usually stronger and darker than a traditional Bock. Our take on this winter warmer is a less sweet version of the style. Triple decoction produces a rich malty bier to enjoy as the snow starts to fall.',
          serving_location: 'https://www.google.com/maps/place/Prost+Tasting+Room/@40.588187,-105.0765712,17z/data=!3m1!4b1!4m5!3m4!1s0x87694a8b45b93fab:0xc809e16aafced2ea!8m2!3d40.588187!4d-105.0743825',
          photo_url: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-0/c0.22.200.200/p200x200/15390741_1365701863448185_7413363727605171483_n.jpg?oh=039dc63ae97625eb494558120254ff68&oe=59B8A401',
          brewery_url: 'https://prostbrewing.com/',
        }),
        knex('brewers').insert({
          id: 2,
          name: 'Brewer\'s name',
          brewery: 'Prost',
          brewery_logo: 'https://prostbrewing.com/wp-content/uploads/2016/12/prost-logo_45px.png',
          featured_drink: 'Doppelbock',
          description: 'Doppelbock means “Double Bock” and is usually stronger and darker than a traditional Bock. Our take on this winter warmer is a less sweet version of the style. Triple decoction produces a rich malty bier to enjoy as the snow starts to fall.',
          serving_location: 'https://www.google.com/maps/place/Prost+Tasting+Room/@40.588187,-105.0765712,17z/data=!3m1!4b1!4m5!3m4!1s0x87694a8b45b93fab:0xc809e16aafced2ea!8m2!3d40.588187!4d-105.0743825',
          photo_url: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-0/c0.22.200.200/p200x200/15390741_1365701863448185_7413363727605171483_n.jpg?oh=039dc63ae97625eb494558120254ff68&oe=59B8A401',
          brewery_url: 'https://prostbrewing.com/',
        })

        .then(() => {
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
      })
    ]);
  });
};
