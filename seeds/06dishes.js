'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('dishes').insert({
          id: 1,
          plate_name: 'burgers',
          prepared_by: 'Andrea Ridder',
          description: 'burgers blah, blah',
          ingredients: 'mnis iste natus error sit voluptatem accusantium doloremque laudantium',
          photo_url: 'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/17308852_1014392528660464_6938891653434672212_n.jpg?oh=4aa7b4786b0a645b4017a75ab0e68a68&oe=599B22C6',
          paired_with: 'Alcohol Free Stop',
          paired_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/12239628_901075366612458_1585621310251282063_n.jpg?oh=a145dfd1b6b12bfe797be9d2350c4e2f&oe=59983D03',
          paired_with_desc: 'fjk afa fafs',
          servedfrom: 'Savory Spice Shop',
          servedfrom_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/12239628_901075366612458_1585621310251282063_n.jpg?oh=a145dfd1b6b12bfe797be9d2350c4e2f&oe=59983D03',
          location_url: 'https://www.google.com/maps/place/Savory+Spice+Shop/@40.5877481,-105.0794907,17z/data=!4m12!1m6!3m5!1s0x87694a8ac7747e79:0xe9678cc2a6059df3!2sSavory+Spice+Shop!8m2!3d40.587744!4d-105.077302!3m4!1s0x87694a8ac7747e79:0xe9678cc2a6059df3!8m2!3d40.587744!4d-105.077302'
        }),
        knex('dishes').insert({
          id: 2,
          plate_name: 'tacos',
          prepared_by: 'Billy Charters',
          description: 'onsectetur, adipisci velit, sed quia non numquam eius mod',
          ingredients: 'mnis iste natus error sit voluptatem accusantium doloremque laudantium',
          photo_url: 'https://scontent.fapa1-1.fna.fbcdn.net/v/t31.0-8/17505235_118294752046181_5648709834699441935_o.jpg?oh=e87fc8eb5fe720f5c1ae182d83833844&oe=595181BB',
          paired_with: 'Weldwerks Brewing',
          paired_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/12239628_901075366612458_1585621310251282063_n.jpg?oh=a145dfd1b6b12bfe797be9d2350c4e2f&oe=59983D03',
          paired_with_desc: 'dafd faffe es',
          servedfrom: 'STUFT Fort Collins',
          servedfrom_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/486370_351769928256064_1012064540_n.png?oh=b7fd56c6ac914381ab2b67acef97b9f8&oe=5951A30F',
          location_url: 'https://www.google.com/maps/place/Stuft+a+burger+bar/@40.5850565,-105.078951,17z/data=!4m12!1m6!3m5!1s0x87694af505b9913d:0x72d019a1cf14ed1d!2sStuft+a+burger+bar!8m2!3d40.5850565!4d-105.0767623!3m4!1s0x87694af505b9913d:0x72d019a1cf14ed1d!8m2!3d40.5850565!4d-105.0767623'
        }),
        knex('dishes').insert({
          id: 3,
          plate_name: 'burritos',
          prepared_by: 'Aaron Boisverti',
          description: 'onsectetur, adipQu numquam eius mod',
          ingredients: 'mnis iste natus error sit voluptatem accusantium doloremque laudantium',
          photo_url: 'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/14572383_661831327313960_2343797828356725374_n.jpg?oh=d00436e26e496eeaf6c6473fa7f7b46c&oe=59509E08',
          paired_with: 'Alcohol Free Stop',
          paired_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/14102161_10157260373265431_5995159726188703945_n.png?oh=fd86bd245f1f26e74a82dea8aac030bb&oe=5992467D',
          paired_with_desc: 'ffsfre feff ew',
          servedfrom: 'The Kitchen',
          servedfrom_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t31.0-8/16251893_1834255793511055_1952159718662231942_o.png?oh=5d26d34acb0ad8c7ca082878288ccee9&oe=59568564',
          location_url: 'https://www.google.com/maps/place/The+Kitchen/@40.5872317,-105.0789898,17z/data=!4m12!1m6!3m5!1s0x87694a8ad2b81a6d:0x2a5b115018ae4a8b!2sThe+Kitchen!8m2!3d40.5872276!4d-105.0768011!3m4!1s0x87694a8ad2b81a6d:0x2a5b115018ae4a8b!8m2!3d40.5872276!4d-105.0768011'
        }),
        knex('dishes').insert({
          id: 4,
          plate_name: 'nachos',
          prepared_by: 'Chris Robinson',
          description: 'onsQuis auteprer, adipisci velit, sed quia non numquam eius mod',
          ingredients: 'mnis iste natus error sit voluptatem accusantium doloremque laudantium',
          photo_url: 'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/14192084_10154562027981522_4123502083851469435_n.jpg?oh=987b4a8e70fdbe488db821206d6a8687&oe=5957825A',
          paired_with: 'Pateros Creek',
          paired_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/10171287_10152333430361345_3850762473658160825_n.jpg?oh=5c78cef19e0e881efb8b639a406a9338&oe=594D874F',
          paired_with_desc: 'ff rfrfs re',
          servedfrom: 'Pateros Creek',
          servedfrom_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/10171287_10152333430361345_3850762473658160825_n.jpg?oh=5c78cef19e0e881efb8b639a406a9338&oe=594D874F',
          location_url: 'https://www.google.com/maps/place/Pateros+Creek+Brewing+Company/@40.5898771,-105.0786387,17z/data=!4m12!1m6!3m5!1s0x87694a8a53c8aba7:0xca03b5c6a1e64bdb!2sPateros+Creek+Brewing+Company!8m2!3d40.589873!4d-105.07645!3m4!1s0x87694a8a53c8aba7:0xca03b5c6a1e64bdb!8m2!3d40.589873!4d-105.07645'
        }),
        knex('dishes').insert({
          id: 5,
          plate_name: 'pulled pork',
          prepared_by: 'Matthew Ezzo',
          description: 'onsectetur, adiQuis autem vel eum iure reprem eius mod',
          ingredients: 'mnis iste natus error sit voluptatem accusantium doloremque laudantium',
          photo_url: 'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/13707680_652183841603728_7484054453269514146_n.jpg?oh=cb86608f56b20487b97083ff5d20bb25&oe=598E9102',
          paired_with: 'sparking water',
          paired_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/14102161_10157260373265431_5995159726188703945_n.png?oh=fd86bd245f1f26e74a82dea8aac030bb&oe=5992467D',
          paired_with_desc: 'reaf e grtghrts h',
          servedfrom: 'The Cupboard',
          servedfrom_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/77165_457872138391_2679398_n.jpg?oh=484f432e4aac0e6e71591a33dcdcc236&oe=594D1623',
          location_url: 'https://www.google.com/maps/place/The+Cupboard/@40.5858991,-105.0789627,17z/data=!4m12!1m6!3m5!1s0x87694af51877de23:0xf36e5c40f56ea0a6!2sThe+Cupboard!8m2!3d40.585895!4d-105.076774!3m4!1s0x87694af51877de23:0xf36e5c40f56ea0a6!8m2!3d40.585895!4d-105.076774'
        }),
        knex('dishes').insert({
          id: 6,
          plate_name: 'steak',
          prepared_by: 'John Lawyer',
          description: 'onQuis autem vel eum iure repret, sed quia non numquam eius mod',
          ingredients: 'mnis iste natus error sit voluptatem accusantium doloremque laudantium',
          photo_url: 'https://scontent.fapa1-1.fna.fbcdn.net/v/t31.0-8/14753203_1250498541639753_8860582815873046796_o.jpg?oh=44447dacea22b9cba749db81c2fb81cd&oe=59986633',
          paired_with: 'New Belgium Brewery',
          paired_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/1935195_10153448836102620_3118698603718435720_n.png?oh=de30698117c5fc65330fd3c45c4f8ba7&oe=59931AA5',
          paired_with_desc: 'fr egrgtste fres',
          servedfrom: 'Elliot\'s Martini Bar',
          servedfrom_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/537604_518406368201388_551851675_n.jpg?oh=270b9704db5cc3cd4dc3959fb833be4d&oe=59589A60',
          location_url: 'https://www.google.com/maps/place/Blind+Pig+Pub/@40.5884398,-105.0766902,17z/data=!4m5!3m4!1s0x0:0x4b91d56016ab8910!8m2!3d40.5882071!4d-105.0749266'
        }),
        knex('dishes').insert({
          id: 7,
          plate_name: 'bacon dish',
          prepared_by: 'Julianna Trujillo',
          description: 'onsectetQuivel eum iure reprei velit, sed quia non numquam eius mod',
          ingredients: 'mnis iste natus error sit voluptatem accusantium doloremque laudantium',
          photo_url: 'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/16998009_1015548028589101_7228920572362670852_n.jpg?oh=a73072034d96d497653b16a922052be9&oe=598D2CA5',
          paired_with: 'Bean Cycle\'s Brew',
          paired_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/1383826_10151984014504666_2091306434_n.jpg?oh=d68bcc156e9796111be96ed30106a167&oe=598E50AE',
          paired_with_desc: 'grsg fregergre',
          servedfrom: 'The Bean Cycle',
          servedfrom_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/1383826_10151984014504666_2091306434_n.jpg?oh=d68bcc156e9796111be96ed30106a167&oe=598E50AE',
          location_url: 'https://www.google.com/maps/place/The+Bean+Cycle/@40.5879771,-105.078885,17z/data=!4m12!1m6!3m5!1s0x87694a8ad97439d9:0x795f97db14de4b07!2sThe+Bean+Cycle!8m2!3d40.587973!4d-105.0766963!3m4!1s0x87694a8ad97439d9:0x795f97db14de4b07!8m2!3d40.587973!4d-105.0766963'
        }),
        knex('dishes').insert({
          id: 8,
          plate_name: 'salsa wraps',
          prepared_by: 'Malini Bartels',
          description: 'onsectetur, Quis autem vel eum iure repre',
          ingredients: 'mnis iste natus error sit voluptatem accusantium doloremque laudantium',
          photo_url: 'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/17757325_1201475759971604_79139967594289784_n.jpg?oh=9341b04c8df065570faf9c5655726d3d&oe=598C295F',
          paired_with: 'Odell Brewing Co',
          paired_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/10422016_10154811608075603_3215105223001435363_n.jpg?oh=7948f52f3dddf59bce98e46142853976&oe=595CA989',
          paired_with_desc: ' gdrsggr  frges reg',
          servedfrom: 'The Cooking Studio',
          servedfrom_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t31.0-8/12095078_1622728564658801_8174142814215899857_o.jpg?oh=3facd937164a44c5815f30c9c1527c5a&oe=5958C089',
          location_url: 'https://www.google.com/maps/place/The+Cooking+Studio+Fort+Collins/@40.5878097,-105.079801,17z/data=!4m12!1m6!3m5!1s0x87694a8ac7747e79:0xe58fb6fcbe7b3a70!2sThe+Cooking+Studio+Fort+Collins!8m2!3d40.5878056!4d-105.0776123!3m4!1s0x87694a8ac7747e79:0xe58fb6fcbe7b3a70!8m2!3d40.5878056!4d-105.0776123'
        }),
        knex('dishes').insert({
          id: 9,
          plate_name: 'pasta',
          prepared_by: 'Jordan Kopp',
          description: 'Quis autem vel eum iure reprevelit, sed quia non numquam eius mod',
          ingredients: 'mnis iste natus error sit voluptatem accusantium doloremque laudantium',
          photo_url: 'https://scontent.fapa1-1.fna.fbcdn.net/v/t1.0-9/15940346_10154968742582437_42337797719578871_n.jpg?oh=bc0da0f2f564f1d0c030c12fc12d71c8&oe=595EE0FE',
          paired_with: 'Horse and Dragon',
          paired_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t31.0-8/856202_341120066006641_1750321635_o.jpg?oh=5f48e251becf909af2ac1c26cddeb076&oe=5955966E',
          paired_with_desc: 'fres re gresgrgre',
          servedfrom: 'Downtown Artery',
          servedfrom_logo: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/11665506_1076419705719185_2378172813081988184_n.jpg?oh=2d3b5851749544417bb3d0965dde3661&oe=59949E0C',
          location_url: 'https://www.google.com/maps/place/Downtown+Artery/@40.5887145,-105.0763408,17z/data=!4m12!1m6!3m5!1s0x87694a8b69c0f32b:0x5bcf1221ed47a288!2sDowntown+Artery!8m2!3d40.5887104!4d-105.0741521!3m4!1s0x87694a8b69c0f32b:0x5bcf1221ed47a288!8m2!3d40.5887104!4d-105.0741521'
        })
        // knex('dishes').insert({
        //   id: 10,
        //   plate_name: 'sushi',
        //   prepared_by: '',
        //   description: 'onsectetur, Quis autem vel eum iure repreadipisci velit, sed quia non numquam eius mod',
        //   ingredients: 'mnis iste natus error sit voluptatem accusantium doloremque laudantium',
        //   photo_url: '',
        //   paired_with: '',
        //   paired_logo: '',
        //   paired_with_desc: '',
        //   servedfrom: '',
        //   servedfrom_logo: '',
        //   location_url: ''
        // })
        .then(() => {
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
      })
    ]);
  });
};
