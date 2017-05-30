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
  knex('chefs')
    .orderBy('id', 'asc')
    .select('id', 'name', 'restaurant', 'restaurant_logo', 'paired_with', 'paired_logo', 'serving_location', 'serving_photo', 'photo_url', 'restaurant_url')
    .orderBy('id')
    .then((results) => {
      res.json(results);
      console.log(results);
    })
    .catch((err)=>{
      res.send(err);
    });
});

router.get('/:id', (req,res) => {
  knex('chefs')
    .select('id', 'name', 'restaurant', 'restaurant_logo', 'restaurant_url', 'paired_with', 'paired_logo', 'serving_location', 'photo_url', 'restaurant_url' )
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
  knex('chefs')
    .insert({
      name: req.body.name,
      restaurant: req.body.restaurant,
      restaurant_logo: req.body.restaurant_logo,
      paired_with: req.body.paired_with,
      paired_logo: req.body.paired_logo,
      serving_location: req.body.serving_location,
      serving_photo: req.body.serving_photo,
      photo_url: req.body.photo_url,
      restaurant_url: req.body.restaurant_url
    }, ['id', 'name', 'restaurant', 'serving_photo', 'restaurant_logo', 'paired_with', 'paired_logo', 'serving_location', 'photo_url', 'restaurant_url'])
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
  knex('chefs')
    .update({
      name: req.body.name,
      restaurant: req.body.restaurant,
      restaurant_logo: req.body.restaurant_logo,
      paired_with: req.body.paired_with,
      paired_logo: req.body.paired_logo,
      serving_location: req.body.serving_location,
      serving_photo: req.body.serving_photo,
      photo_url: req.body.photo_url,
      restaurant_url: req.body.restaurant_url
    }, ['id', 'name', 'restaurant', 'restaurant_logo', 'paired_with', 'serving_location', 'photo_url'])
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
  knex('chefs')
  .where('id', req.params.id)
  .first()
  .then((response)=>{
    console.log(response);
    let toDelete = camelizeKeys(response);
    return knex('chefs')
    .where('id', toDelete.id)
    .del()
    .then((deleted)=>{
      res.send(toDelete);
  });
});
});


module.exports = router;
