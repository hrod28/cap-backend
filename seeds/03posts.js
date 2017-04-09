'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('posts').insert({
          id: 1,
          title: 'Puppy',
          description: 'The best friend you will ever need!',
          picture_url: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t31.0-8/17834955_779058295593894_573773594463270823_o.jpg?oh=28abaedeeae255eb2bf55ec475f0ad68&oe=595EB3F2'
        }),
        knex('posts').insert({
          id: 2,
          title: 'Rockies Tickets',
          description: 'Set of 4 Box seats to the Colorado Rockies Game on September 22, 2015',
          picture_url: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t31.0-8/17191602_10154863524810901_5644779041314879178_o.jpg?oh=5d663321c3c535d7ff50efd0bd181b31&oe=599592DF'
        }),
        knex('posts').insert({
          id: 3,
          title: 'cool bicycle',
          description: 'good brand, blah, blah, blah. ride, ride, ride, ride. fun!',
          picture_url: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/10457607_10202385443653365_962608755718955002_n.jpg?oh=0ca0884775bf899d3f850468f5853969&oe=595E899C'
        }),
        knex('posts').insert({
          id: 4,
          title: 'Gift certificates to escape house',
          description: 'escape room is Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ',
          picture_url: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/13924943_534349110085746_3543094093973118314_n.jpg?oh=27e4307bbf2f39ff1ef272edf41324a2&oe=59985050'
        }),
        knex('posts').insert({
          id: 5,
          title: 'ut officiis debitis aut',
          description: 'dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum',
          picture_url: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/12043163_916531435069019_4519033563441877336_n.jpg?oh=bc8b6118d4e0ad13dc3d3ad1f4108f76&oe=595E5643'
        }),
        knex('posts').insert({
          id: 6,
          title: 'Itaque earum rerum ',
          description: 'facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est',
          picture_url: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/16602739_1530289617051278_7821284760389316146_n.jpg?oh=a7041c7a2a1c23fcdbb1eff9a2540a7a&oe=59953417'
        }),
        knex('posts').insert({
          id: 7,
          title: 'omnis voluptas assume',
          description: 'facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque assumenda est',
          picture_url: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t31.0-8/16463097_1711921279098902_4774550589156614635_o.jpg?oh=cb57050466ef099de59f10769e78417e&oe=59999A13'
        }),
        knex('posts').insert({
          id: 8,
          title: '',
          description: '',
          picture_url: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/15283918_10154777365213221_2883274982512939767_n.png?oh=996ac10d6b1eb81ff4a7d5266029862d&oe=599A10F5'
        })
        .then(() => {
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
      })
    ]);
  });
};
