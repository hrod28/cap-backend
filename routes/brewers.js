'use strict';

// DEPENDENCIES -----------------------------------------
const express = require('express');
const router = express.Router();

const knex = require('../knex');

const {camelizeKeys, decamelizeKeys} = require('humps');
const boom = require('boom');

//ROUTES ------------------------------------------------

//get user by id
router.get('/', (req, res) => {
  knex('brewers')
    .orderBy('id', 'asc')
    .select('id', 'name', 'brewery', 'brewery_logo', 'featured_drink', 'description', 'serving_location', 'photo_url', 'brewery_url')
    .then((results) => {
      res.json(results);
      console.log(results);
    })
    .catch((err)=>{
      res.send(err);
    });
});

router.get('/:id', (req,res) => {
  knex('brewers')
    .select('id', 'name', 'brewery', 'brewery_logo', 'featured_drink', 'description', 'serving_location', 'photo_url', 'brewery_url')
    .where({id: req.params.id})
    .then((results) => {
      res.json(results[0]);
    })
    .catch((err)=>{
      res.send(err);
    });
});

router.post('/', (req,res) => {
  console.log('reach post route');
  knex('brewers')
    .insert({
      name: req.body.name,
      brewery: req.body.brewery,
      brewery_logo: req.body.brewery_logo,
      featured_drink: req.body.featured_drink,
      serving_location: req.body.serving_location,
      photo_url: req.body.photo_url,
      brewery_url: req.body.brewery_url
    }, ['id', 'name', 'brewery', 'brewery_logo', 'featured_drink', 'serving_location', 'photo_url', 'brewery_url'])
    .then((result) => {
      console.log("RESULT", result[0]);
      res.send(result[0]);
    })
    .catch((err)=>{
      res.send(err);
    });
});

router.patch('/:id', (req, res)=>{
  console.log('top of patch function');
  knex('brewers')
    .update({
      name: req.body.name,
      brewery: req.body.brewery,
      brewery_logo: req.body.brewery_logo,
      featured_drink: req.body.featured_drink,
      description: req.body.description,
      serving_location: req.body.serving_location,
      photo_url: req.body.photo_url,
      brewery_url: req.body.brewery_url
    }, ['id', 'name', 'brewery', 'brewery_logo', 'featured_drink', 'description', 'serving_location', 'photo_url', 'brewery_url'])
    .where({id: req.params.id})
    .then((result) => {
      console.log("RESULT", result[0]);
      res.send(result[0]);
      console.log('end of patch function');
    })
    .catch((err)=>{
      res.send(err);
    });
});

router.delete('/:id', (req,res,next)=>{
  knex('brewers')
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
