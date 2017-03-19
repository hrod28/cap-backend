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
    .select('id', 'name', 'restaurant', 'paired_with', 'serving_location', 'photo_url', 'restaurant_url')
    .then((results) => {
      res.json(results);
      console.log(results);
    })
    .catch((err)=>{
      res.send(err);
    });
});

// router.get('/:id', (req,res) => {
//   knex('chefs')
//     .select('id', 'name', 'about', 'restaurant', 'favorite_dish', 'quote')
//     .where({id: req.params.id})
//     .then((results) => {
//       res.json(results[0]);
//     })
//     .catch((err)=>{
//       res.send(err);
//     });
// });

// router.post('/', (req,res) => {
//   console.log('reach post route');
//   knex('chefs')
//     .insert({
//       name: req.body.name,
//       about: req.body.about,
//       restaurant: req.body.restaurant,
//       favorite_dish: req.body.favorite_dish,
//       quote: req.body.quote
//     }, ['id', 'name', 'about', 'restaurant', 'favorite_dish', 'quote'])
//     .then((result) => {
//       console.log("RESULT", result[0]);
//       res.send(result[0]);
//     })
//     .catch((err)=>{
//       res.send(err);
//     });
// });

router.patch('/:id', (req, res)=>{
  console.log('top of patch function');
  knex('chefs')
    .insert({
      name: req.body.name,
      restaurant: req.body.restaurant,
      paired_with: req.body.paired_with,
      serving_location: req.body.serving_location,
      photo_url: req.body.photo_url
    }, ['id', 'name', 'restaurant', 'paired_with', 'serving_location', 'photo_url'])
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
