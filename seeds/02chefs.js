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
          restaurant_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/12670219_1006023212825832_6682695103277820299_n.png?oh=a9ca69b4de62af181ed7f5a433ba40c8&oe=5998234F',
          paired_with: 'Alcohol Free Stop',
          paired_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/12239628_901075366612458_1585621310251282063_n.jpg?oh=a145dfd1b6b12bfe797be9d2350c4e2f&oe=59983D03',
          serving_location: 'Savory Spice Shop',
          photo_url: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/17308774_10154881965640901_6148192001350908683_n.jpg?oh=67e3cc712078182bceecb0ef3cc3c64a&oe=594EEB15',
          restaurant_url: "https://www.google.com/maps/place/Savory+Spice+Shop/@40.5877481,-105.0794907,17z/data=!4m12!1m6!3m5!1s0x87694a8ac7747e79:0xe9678cc2a6059df3!2sSavory+Spice+Shop!8m2!3d40.587744!4d-105.077302!3m4!1s0x87694a8ac7747e79:0xe9678cc2a6059df3!8m2!3d40.587744!4d-105.077302"
        }),
        knex('chefs').insert({
          id: 2,
          name: 'Billy Charters',
          restaurant: 'STUFT burger bar',
          restaurant_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/486370_351769928256064_1012064540_n.png?oh=b7fd56c6ac914381ab2b67acef97b9f8&oe=5951A30F',
          paired_with: 'Weldwerks Brewing',
          paired_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/14691059_899605590172428_4832474147096760340_n.jpg?oh=377d5894c7b64b9081c3cb8582943886&oe=5991B1B7',
          serving_location: 'STUFT Fort Collins',
          photo_url: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/17342715_10154869775555901_4989830856384163770_n.jpg?oh=e663200c796a9a329fa876cb31ccc43c&oe=594EF0C3',
          restaurant_url: "https://www.google.com/maps/place/Stuft+a+burger+bar/@40.5850565,-105.078951,17z/data=!4m12!1m6!3m5!1s0x87694af505b9913d:0x72d019a1cf14ed1d!2sStuft+a+burger+bar!8m2!3d40.5850565!4d-105.0767623!3m4!1s0x87694af505b9913d:0x72d019a1cf14ed1d!8m2!3d40.5850565!4d-105.0767623"
        }),
        knex('chefs').insert({
          id: 3,
          name: 'Aaron Boisverti',
          restaurant: 'The Kitchen',
          restaurant_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t31.0-8/16251893_1834255793511055_1952159718662231942_o.png?oh=5d26d34acb0ad8c7ca082878288ccee9&oe=59568564',
          paired_with: 'Alcohol Free Stop',
          paired_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/14102161_10157260373265431_5995159726188703945_n.png?oh=fd86bd245f1f26e74a82dea8aac030bb&oe=5992467D',
          serving_location: 'The Kitchen',
          photo_url: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t31.0-8/17620344_10154905819730901_5898213765812437236_o.jpg?oh=9317b42f97c4010a424a07128870ffe3&oe=5992CA1B',
          restaurant_url: "https://www.google.com/maps/place/The+Kitchen/@40.5872317,-105.0789898,17z/data=!4m12!1m6!3m5!1s0x87694a8ad2b81a6d:0x2a5b115018ae4a8b!2sThe+Kitchen!8m2!3d40.5872276!4d-105.0768011!3m4!1s0x87694a8ad2b81a6d:0x2a5b115018ae4a8b!8m2!3d40.5872276!4d-105.0768011"
        }),
        knex('chefs').insert({
          id: 4,
          name: 'Chris Robinson',
          restaurant: 'Hog Wild BBQ',
          restaurant_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/601051_542346359122764_468220336_n.jpg?oh=6cf94301626f5664e9adfa70318b5ca8&oe=59564BF3',
          paired_with: 'Pateros Creek Brewery',
          paired_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/10171287_10152333430361345_3850762473658160825_n.jpg?oh=5c78cef19e0e881efb8b639a406a9338&oe=594D874F',
          serving_location: 'Pateros Creek',
          photo_url: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/17553765_10154902481590901_5696256053487452955_n.jpg?oh=17600be1d4ce79c903f351e46b85817e&oe=59907097',
          restaurant_url: "https://www.google.com/maps/place/Pateros+Creek+Brewing+Company/@40.5898771,-105.0786387,17z/data=!4m12!1m6!3m5!1s0x87694a8a53c8aba7:0xca03b5c6a1e64bdb!2sPateros+Creek+Brewing+Company!8m2!3d40.589873!4d-105.07645!3m4!1s0x87694a8a53c8aba7:0xca03b5c6a1e64bdb!8m2!3d40.589873!4d-105.07645"
        }),
        knex('chefs').insert({
          id: 5,
          name: 'Matthew Ezzo',
          restaurant: 'The Garlic Knot',
          restaurant_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/10482856_674186432659290_6893034636633850269_n.png?oh=39a3e0fced214e6ba3955e86698d020d&oe=598C7C10',
          paired_with: 'Alcohol Free Stop',
          paired_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/14102161_10157260373265431_5995159726188703945_n.png?oh=fd86bd245f1f26e74a82dea8aac030bb&oe=5992467D',
          serving_location: 'The Cupboard',
          photo_url: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t31.0-8/17310186_10154875331645901_3866931166019661631_o.jpg?oh=a542d8aae1138836d9dd75ae7382e986&oe=599265B1',
          restaurant_url: "https://www.google.com/maps/place/The+Cupboard/@40.5858991,-105.0789627,17z/data=!4m12!1m6!3m5!1s0x87694af51877de23:0xf36e5c40f56ea0a6!2sThe+Cupboard!8m2!3d40.585895!4d-105.076774!3m4!1s0x87694af51877de23:0xf36e5c40f56ea0a6!8m2!3d40.585895!4d-105.076774"
        }),
        knex('chefs').insert({
          id: 6,
          name: 'John Lawyer',
          restaurant: 'Lickskillet Catering',
          restaurant_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/10464238_1507575872830165_8742790717499901497_n.jpg?oh=ef19b5d8b91f7faab1ae85c3ce02e6a6&oe=59529228',
          paired_with: 'New Belgium Brewery',
          paired_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/1935195_10153448836102620_3118698603718435720_n.png?oh=de30698117c5fc65330fd3c45c4f8ba7&oe=59931AA5',
          serving_location: 'Elliot\'s Martini Bar',
          photo_url: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/17343050_10154872214525901_811502628626556009_n.jpg?oh=e1b006a959b9770f1e83566a45d3a1c0&oe=595DD438',
          restaurant_url: "https://www.google.com/maps/place/Blind+Pig+Pub/@40.5884398,-105.0766902,17z/data=!4m5!3m4!1s0x0:0x4b91d56016ab8910!8m2!3d40.5882071!4d-105.0749266"
        }),
        knex('chefs').insert({
          id: 7,
          name: 'Julianna Trujillo',
          restaurant: 'Juli y Juan',
          restaurant_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/1383826_10151984014504666_2091306434_n.jpg?oh=d68bcc156e9796111be96ed30106a167&oe=598E50AE',
          paired_with: 'Bean Cycle\'s Brew',
          paired_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/1383826_10151984014504666_2091306434_n.jpg?oh=d68bcc156e9796111be96ed30106a167&oe=598E50AE',
          serving_location: 'The Bean Cycle',
          photo_url: 'https://static1.squarespace.com/static/582e5c2b03596e83b82bba8c/582f5ce02994cacba8a50124/58abc7ae09e1c452e1c1d48b/1487652787983/?format=500w',
          restaurant_url: "https://www.google.com/maps/place/The+Bean+Cycle/@40.5879771,-105.078885,17z/data=!4m12!1m6!3m5!1s0x87694a8ad97439d9:0x795f97db14de4b07!2sThe+Bean+Cycle!8m2!3d40.587973!4d-105.0766963!3m4!1s0x87694a8ad97439d9:0x795f97db14de4b07!8m2!3d40.587973!4d-105.0766963"
        }),
        knex('chefs').insert({
          id: 8,
          name: 'Malini Bartels',
          restaurant: 'The Cooking Studio',
          restaurant_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t31.0-8/12095078_1622728564658801_8174142814215899857_o.jpg?oh=3facd937164a44c5815f30c9c1527c5a&oe=5958C089',
          paired_with: 'Odell Brewing Co',
          paired_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/10422016_10154811608075603_3215105223001435363_n.jpg?oh=7948f52f3dddf59bce98e46142853976&oe=595CA989',
          serving_location: 'The Cooking Studio',
          photo_url: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/17353133_10154866373235901_4413733128643644576_n.jpg?oh=131e24a2460bc29082827ce3831d27eb&oe=594E84E8',
          restaurant_url: "https://www.google.com/maps/place/The+Cooking+Studio+Fort+Collins/@40.5878097,-105.079801,17z/data=!4m12!1m6!3m5!1s0x87694a8ac7747e79:0xe58fb6fcbe7b3a70!2sThe+Cooking+Studio+Fort+Collins!8m2!3d40.5878056!4d-105.0776123!3m4!1s0x87694a8ac7747e79:0xe58fb6fcbe7b3a70!8m2!3d40.5878056!4d-105.0776123"
        }),
        knex('chefs').insert({
          id: 9,
          name: 'Micki Hudson',
          restaurant: 'Wabi Sabi Old Town',
          restaurant_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/12039379_1651273268472764_8452315862947331292_n.jpg?oh=a4a63eef2e41f0581de6122bef179f2e&oe=599A3B12',
          paired_with: 'Soul Squared',
          paired_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/11209706_475033859327942_6573527743687003347_n.jpg?oh=87a7150a32b2b2d820ef86def100d9c5&oe=5999EE17',
          serving_location: 'Wabi Sabi Fort Collins',
          photo_url: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/12039379_1651273268472764_8452315862947331292_n.jpg?oh=a4a63eef2e41f0581de6122bef179f2e&oe=599A3B12',
          restaurant_url: "https://www.google.com/maps/place/Wabi+Sabi/@40.5885672,-105.0772367,17z/data=!4m12!1m6!3m5!1s0x87694a8b1604bd41:0x1dd0dbf67ef85eb3!2sWabi+Sabi!8m2!3d40.5885631!4d-105.075048!3m4!1s0x87694a8b1604bd41:0x1dd0dbf67ef85eb3!8m2!3d40.5885631!4d-105.075048"
        }),
        knex('chefs').insert({
          id: 10,
          name: 'Jordan Kopp',
          restaurant: 'Fiona\'s Deli',
          restaurant_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/551490_10150651780431033_130455099_n.jpg?oh=492122c9dd6a8f141952ec40c502a054&oe=595DC876',
          paired_with: 'Horse and Dragon',
          paired_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t31.0-8/856202_341120066006641_1750321635_o.jpg?oh=5f48e251becf909af2ac1c26cddeb076&oe=5955966E',
          serving_location: 'Downtown Artery',
          photo_url: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t31.0-8/17390383_10154884424435901_622086653380640406_o.jpg?oh=dfadd56ea3ca674347a5130b406ca478&oe=59590ED7',
          restaurant_url: "https://www.google.com/maps/place/Downtown+Artery/@40.5887145,-105.0763408,17z/data=!4m12!1m6!3m5!1s0x87694a8b69c0f32b:0x5bcf1221ed47a288!2sDowntown+Artery!8m2!3d40.5887104!4d-105.0741521!3m4!1s0x87694a8b69c0f32b:0x5bcf1221ed47a288!8m2!3d40.5887104!4d-105.0741521"
        })
        .then(() => {
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
      })
    ]);
  });
};
