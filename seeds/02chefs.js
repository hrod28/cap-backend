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
          photo_url: 'https://cdn.shopify.com/s/files/1/0915/8806/t/4/assets/logo.png?5872046975831910425',
          restaurant_url: "https://wunderjuice.com"
        }),
        knex('chefs').insert({
          id: 2,
          name: 'Billy Charters',
          restaurant: 'STUFT burger bar',
          paired_with: 'Paired with Weldwerks Brewing',
          serving_location: 'STUFT Fort Collins',
          photo_url: 'http://www.stuftburgerbar.com/assets/Uploads/Beer-Ad-Temp-notext.jpg',
          restaurant_url: "http://www.stuftburgerbar.com"
        }),
        knex('chefs').insert({
          id: 3,
          name: 'Cameron Trezoglou',
          restaurant: 'Sunchoke Pop Up Restaurant',
          paired_with: 'Alcohol Free Stop',
          serving_location: 'Revolution Artisan Pops',
          photo_url: 'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/13087465_520149078172136_3090728923201380908_n.png?oh=0494bfc608a4ab303e04361367ea15ef&oe=595E2165',
          restaurant_url: "https://www.facebook.com/sunchokerestaurant"
        }),
        knex('chefs').insert({
          id: 4,
          name: 'Chris Robinson',
          restaurant: 'Hog Wild BBQ',
          paired_with: 'Paired with Pateros Creek Brewery',
          serving_location: 'Pateros Creek',
          photo_url: 'https://static1.squarespace.com/static/54662a04e4b072133bf3f84d/t/5485f249e4b0ba638effc251/1418064464067/?format=1000w',
          restaurant_url: "http://www.hogwildcolorado.com"
        }),
        knex('chefs').insert({
          id: 5,
          name: 'Dustin Tanski',
          restaurant: 'Vom Foss (Crescendo)',
          paired_with: 'Paired with Feisty Spirits',
          serving_location: 'Vom Foss',
          photo_url: 'https://www.vomfassusa.com/skin/frontend/vomfass/vomfass/images/logo_usa.png',
          restaurant_url: "https://www.vomfassusa.com"
        }),
        knex('chefs').insert({
          id: 6,
          name: 'Matthew Ezzo',
          restaurant: 'The Garlic Knot',
          paired_with: 'Alcohol Free Stop',
          serving_location: 'The Cupboard',
          photo_url: 'http://www.garlicknotpizza.com/colorado/images/Logo_FC.jpg',
          restaurant_url: "http://www.garlicknotpizza.com"
        }),
        knex('chefs').insert({
          id: 7,
          name: 'John Lawyer',
          restaurant: 'Lickskillet Catering',
          paired_with: 'New Belgium Brewery',
          serving_location: 'Elliot\'s Martini Bar',
          photo_url: 'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-1/10464238_1507575872830165_8742790717499901497_n.jpg?oh=1ea2769f5541a88f96b64a866330ebef&oe=59579BA2',
          restaurant_url: "https://www.facebook.com/LickSkillet"
        }),
        knex('chefs').insert({
          id: 8,
          name: 'Julianna Trujillo',
          restaurant: 'Juli y Juan',
          paired_with: 'Alcohol Free Stop in lieu of Coffee Pairing',
          serving_location: 'The Bean Cycle',
          photo_url: 'https://static1.squarespace.com/static/582e5c2b03596e83b82bba8c/582f5ce02994cacba8a50124/58abc7ae09e1c452e1c1d48b/1487652787983/?format=500w',
          restaurant_url: "https://www.juliyjuan.com"
        }),
        knex('chefs').insert({
          id: 9,
          name: 'Malini Bartels',
          restaurant: 'The Cooking Studio',
          paired_with: 'Odell Brewing Co',
          serving_location: 'The Cooking Studio',
          photo_url: 'http://www.the-cooking-studio.com/wp-content/uploads/2014/12/cooking-studio-pans-widget-e1418879124625.jpg',
          restaurant_url: "http://www.the-cooking-studio.com"
        }),
        knex('chefs').insert({
          id: 10,
          name: 'Micki Hudson',
          restaurant: 'Wabi Sabi Old Town',
          paired_with: 'Zwei Brewing',
          serving_location: 'Wabi Sabi Fort Collins',
          photo_url: 'http://wabisabioldtown.com/wp-content/themes/eatery/skins/blank/images/logo.png',
          restaurant_url: "http://wabisabioldtown.com"
        }),
        knex('chefs').insert({
          id: 11,
          name: 'Nick Chase',
          restaurant: 'Scrumpy\'s Cider, Sandwiches, & Sweets',
          paired_with: 'Paired with Scrumpy\'s Cider',
          serving_location: 'Scrumpy',
          photo_url: 'https://static.wixstatic.com/media/d990fc_61a92bd8bf3f4cd0936407b9d466c8da~mv2.jpg/v1/crop/x_0,y_68,w_432,h_580/fill/w_256,h_294,al_c,q_80,usm_0.66_1.00_0.01/d990fc_61a92bd8bf3f4cd0936407b9d466c8da~mv2.webp',
          restaurant_url: "http://www.scrumpys.net"
        }),
        knex('chefs').insert({
          id: 12,
          name: 'Jordan Kopp',
          restaurant: 'Fiona\'s Deli',
          paired_with: 'Funkwerks',
          serving_location: 'Downtown Artery',
          photo_url: 'http://fionasdeli.com/wp-content/uploads/2016/10/logo-fionas.png',
          restaurant_url: "http://fionasdeli.com"
        })
        .then(() => {
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
      })
    ]);
  });
};
