'use strict';

// DEPENDENCIES -----------------------------------------
const express = require('express');
const router = express.Router();

const knex = require('../knex');

const {camelizeKeys, decamelizeKeys} = require('humps');
const bcrypt = require('bcrypt');
const boom = require('boom');

//ROUTES ------------------------------------------------


router.get('/', (req, res, next) => {
  knex('visited_chefs')
    .select('id', 'thanks_name', 'description', 'business_link')
    .then((results) => {
      res.json(results);
    })
    .catch((err)=>{
      res.send(err);
    });
});

module.exports = router;
//
