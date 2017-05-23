'use strict';

// DEPENDENCIES -----------------------------------------
const express = require('express');
const router = express.Router();

const knex = require('../knex');

const {camelizeKeys, decamelizeKeys} = require('humps');
const bcrypt = require('bcrypt');
const boom = require('boom');

//ROUTES ------------------------------------------------

router.get('/', (req, res) => {
  knex('thanks')
    .orderBy('id', 'asc')
    .select('id', 'thanks_name', 'description', 'photo_url', 'business_link')
    .then((results) => {
      res.json(results);
      console.log(results);
    })
    .catch((err)=>{
      res.send(err);
    });
});

router.get('/:id', (req,res) => {
  knex('thanks')
    .select('id', 'thanks_name', 'description', 'photo_url', 'business_link')
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
  knex('thanks')
    .insert({
      thanks_name: req.body.thanks_name,
      description: req.body.description,
      photo_url: req.body.photo_url,
      business_link: req.body.business_link
    }, ['id', 'thanks_name', 'description', 'photo_url', 'business_link'])
    .then((result) => {
      console.log("RESULT", result[0]);
      res.send(result[0]);
    })
    .catch((err)=>{
      res.send(err);
    });
});

router.patch('/:id', (req,res) => {
  console.log('reach post route');
  knex('thanks')
    .update({
      thanks_name: req.body.thanks_name,
      description: req.body.description,
      photo_url: req.body.photo_url,
      business_link: req.body.business_link
    }, ['id', 'thanks_name', 'description', 'photo_url', 'business_link'])
    .where({id: req.params.id})
    .then((result) => {
      console.log("RESULT", result[0]);
      res.send(result[0]);
    })
    .catch((err)=>{
      res.send(err);
    });
});

router.delete('/:id', (req,res)=>{
  knex('thanks')
  .where('id', req.params.id)
  .first()
  .then((response)=>{
    console.log(response);
    let toDelete = camelizeKeys(response);
    return knex('thanks')
    .where('id', toDelete.id)
    .del()
    .then((deleted)=>{
      res.send(toDelete);
  });
});
});


module.exports = router;
