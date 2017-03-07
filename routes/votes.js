'use strict';

// DEPENDENCIES -----------------------------------------
const express = require('express');
const router = express.Router();

const knex = require('../knex');

const {camelizeKeys, decamelizeKeys} = require('humps');
const bcrypt = require('bcrypt');
const boom = require('boom');

//ROUTES ------------------------------------------------

//get user by id
router.get('/', (req, res, next) => {
  knex('votes')
    .select('id', 'user_id', 'chef_id')
    .then((results) => {
      res.json(results);
    })
    .catch((err)=>{
      res.send(err);
    });
});

module.exports = router;
