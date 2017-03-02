'use strict';
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'chefchallenge'
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
