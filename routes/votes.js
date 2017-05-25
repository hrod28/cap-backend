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
  knex('votes')
    .select('id', 'map_photo')
    .then((results) => {
      res.json(results);
    })
    .catch((err)=>{
      res.send(err);
    });
});
router.get('/id', (req, res, next) => {
  knex('votes')
    .select('id', 'map_photo')
    .where({id: req.params.id})
    .then((results) => {
      res.json(results);
    })
    .catch((err)=>{
      res.send(err);
    });
});

router.post('/', (req,res) => {
  console.log('reach post route');
  knex('votes')
    .insert({ map_photo: req.body.map_photo}, ['map_photo'])
    .then((result) => {
      console.log("RESULT", result[0]);
      res.send(result[0]);
    })
    .catch((err)=>{
      res.send(err);
    });
});

router.patch('/:id', (req, res) => {
  knex('comments')
    .update({
      map_photo: req.body.map_photo

    }, ['id', 'map_photo'])
    .where({id: req.params.id})
    .then((result) => {
      res.send(result[0]);
    })
    .catch((err)=>{
      res.send(err);
    });
});

router.delete('/:id', (req,res,next)=>{
  knex('votes')
  .where('id', req.params.id)
  .first()
  .then((response)=>{
    console.log(response);
    let toDelete = camelizeKeys(response);
    return knex('brewers')
    .where('id', toDelete.id)
    .del()
    .then((deleted)=>{
      res.send(toDelete);
  });
});
});


module.exports = router;
