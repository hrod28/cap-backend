'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('chefs').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('chefs').insert({
          id: 1,
          name: 'Andrea Ridder',
          restaurant: 'Wunder Juice + Clean Food',
          paired_with: 'Alcohol Free Stop',
          serving_location: 'Savory Spice Shop',
          photo_url: 'https://static.wixstatic.com/media/d990fc_6c3a934835354763bf142b656cec48db.jpg/v1/crop/x_41,y_74,w_221,h_212/fill/w_258,h_248,al_c,lg_1,q_80/d990fc_6c3a934835354763bf142b656cec48db.webp'
        }),
        knex('chefs').insert({
          id: 2,
          name: 'Billy Charters',
          restaurant: 'STUFT burger bar',
          paired_with: 'Paired with Weldwerks Brewing',
          serving_location: 'STUFT Fort Collins',
          photo_url: 'https://static.wixstatic.com/media/d990fc_61a92bd8bf3f4cd0936407b9d466c8da~mv2.jpg/v1/crop/x_0,y_68,w_432,h_580/fill/w_256,h_294,al_c,q_80,usm_0.66_1.00_0.01/d990fc_61a92bd8bf3f4cd0936407b9d466c8da~mv2.webp'
        }),
        knex('chefs').insert({
          id: 3,
          name: 'Cameron Trezoglou',
          restaurant: 'Sunchoke Pop Up Restaurant',
          paired_with: 'Alcohol Free Stop',
          serving_location: 'Revolution Artisan Pops',
          photo_url: 'https://static.wixstatic.com/media/d990fc_7e8ebe2f42194771a3622709f6155419.jpg/v1/crop/x_0,y_19,w_480,h_547/fill/w_258,h_270,al_c,q_80,usm_0.66_1.00_0.01/d990fc_7e8ebe2f42194771a3622709f6155419.webp'
        }),
        knex('chefs').insert({
          id: 4,
          name: 'Chris Robinson',
          restaurant: 'Hog Wild BBQ',
          paired_with: 'Paired with Pateros Creek Brewery',
          serving_location: 'Pateros Creek',
          photo_url: 'https://static.wixstatic.com/media/6aa641_ab7ec58e32fc4798a8c53308a53b8f67~mv2.jpg/v1/fill/w_258,h_234,al_c,q_80,usm_0.66_1.00_0.01/6aa641_ab7ec58e32fc4798a8c53308a53b8f67~mv2.webp'
        }),
        knex('chefs').insert({
          id: 5,
          name: 'Dustin Tanski',
          restaurant: 'Vom Foss (Crescendo)',
          paired_with: 'Paired with Feisty Spirits',
          serving_location: 'Vom Foss',
          photo_url: 'https://static.wixstatic.com/media/6aa641_ab7ec58e32fc4798a8c53308a53b8f67~mv2.jpg/v1/fill/w_258,h_234,al_c,q_80,usm_0.66_1.00_0.01/6aa641_ab7ec58e32fc4798a8c53308a53b8f67~mv2.webp'
        }),
        knex('chefs').insert({
          id: 6,
          name: 'Matthew Ezzo',
          restaurant: 'The Garlic Knot',
          paired_with: 'Alcohol Free Stop',
          serving_location: 'The Cupboard',
          photo_url: 'https://static.wixstatic.com/media/d990fc_d4cbd4556ed74f35badd9c1d4e520fd9.jpg/v1/crop/x_107,y_296,w_248,h_271/fill/w_258,h_234,al_c,lg_1,q_80/d990fc_d4cbd4556ed74f35badd9c1d4e520fd9.webp'
        }),
        knex('chefs').insert({
          id: 7,
          name: 'John Lawyer',
          restaurant: 'Lickskillet Catering',
          paired_with: 'New Belgium Brewery',
          serving_location: 'Elliot\'s Martini Bar',
          photo_url: 'https://static.wixstatic.com/media/d990fc_61a92bd8bf3f4cd0936407b9d466c8da~mv2.jpg/v1/crop/x_0,y_68,w_432,h_580/fill/w_256,h_294,al_c,q_80,usm_0.66_1.00_0.01/d990fc_61a92bd8bf3f4cd0936407b9d466c8da~mv2.webp'
        }),
        knex('chefs').insert({
          id: 8,
          name: 'Julianna Trujillo',
          restaurant: 'Juli y Juan',
          paired_with: 'Alcohol Free Stop in lieu of Coffee Pairing',
          serving_location: 'The Bean Cycle',
          photo_url: 'https://static.wixstatic.com/media/d990fc_cd1f8b7765694fe29f9eb2b79b2f6abc.jpg/v1/fill/w_258,h_232,al_c,q_80,usm_0.66_1.00_0.01/d990fc_cd1f8b7765694fe29f9eb2b79b2f6abc.webp'
        }),
        knex('chefs').insert({
          id: 9,
          name: 'Malini Bartels',
          restaurant: 'The Cooking Studio',
          paired_with: 'Odell Brewing Co',
          serving_location: 'The Cooking Studio',
          photo_url: 'https://static.wixstatic.com/media/6aa641_bdf4b95ee542414e8a42c01403786567~mv2.jpg/v1/fill/w_258,h_234,al_c,q_80,usm_0.66_1.00_0.01/6aa641_bdf4b95ee542414e8a42c01403786567~mv2.webp'
        }),
        knex('chefs').insert({
          id: 10,
          name: 'Micki Hudson',
          restaurant: 'Wabi Sabi Old Town',
          paired_with: 'Zwei Brewing',
          serving_location: 'Wabi Sabi Fort Collins',
          photo_url: 'https://static.wixstatic.com/media/6aa641_bdf4b95ee542414e8a42c01403786567~mv2.jpg/v1/fill/w_258,h_234,al_c,q_80,usm_0.66_1.00_0.01/6aa641_bdf4b95ee542414e8a42c01403786567~mv2.webp'
        }),
        knex('chefs').insert({
          id: 11,
          name: 'Nick Chase',
          restaurant: 'Scrumpy\'s Cider, Sandwiches, & Sweets',
          paired_with: 'Paired with Scrumpy\'s Cider',
          serving_location: 'Scrumpy',
          photo_url: 'https://static.wixstatic.com/media/d990fc_61a92bd8bf3f4cd0936407b9d466c8da~mv2.jpg/v1/crop/x_0,y_68,w_432,h_580/fill/w_256,h_294,al_c,q_80,usm_0.66_1.00_0.01/d990fc_61a92bd8bf3f4cd0936407b9d466c8da~mv2.webp'
        }),
        knex('chefs').insert({
          id: 12,
          name: 'Jordan Kopp',
          restaurant: 'Fiona\'s Deli',
          paired_with: 'Funkwerks',
          serving_location: 'Downtown Artery',
          photo_url: 'https://static.wixstatic.com/media/6aa641_ab7ec58e32fc4798a8c53308a53b8f67~mv2.jpg/v1/fill/w_258,h_234,al_c,q_80,usm_0.66_1.00_0.01/6aa641_ab7ec58e32fc4798a8c53308a53b8f67~mv2.webp'
        })
        .then(() => {
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
      })
    ]);
  });
};
