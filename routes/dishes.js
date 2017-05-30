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
  knex('dishes')
    .orderBy('id', 'asc')
    .select('id', 'plate_name', 'prepared_by', 'description', 'ingredients', 'photo_url', 'paired_with', 'paired_logo', 'paired_with_desc', 'servedfrom', 'servedfrom_logo', 'location_url')
    .then((results) => {
      res.json(results);
      console.log(results);
    })
    .catch((err)=>{
      res.send(err);
    });
});

router.get('/:id', (req,res) => {
  knex('dishes')
    .select('id', 'plate_name', 'prepared_by', 'description', 'ingredients', 'photo_url', 'paired_with', 'paired_logo', 'paired_with_desc', 'servedfrom', 'servedfrom_logo', 'location_url')
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
  knex('dishes')
    .insert({
      plate_name: req.body.plate_name,
      prepared_by: req.body.prepared_by,
      description: req.body.description,
      ingredients: req.body.ingredients,
      photo_url: req.body.photo_url,
      paired_with: req.body.paired_with,
      paired_logo: req.body.paired_logo,
      paired_with_desc: req.body.paired_with_desc,
      servedfrom: req.body.servedfrom,
      servedfrom_logo: req.body.servedfrom_logo
    }, ['id', 'plate_name', 'prepared_by', 'description', 'ingredients', 'photo_url', 'paired_with', 'paired_logo', 'paired_with_desc', 'servedfrom', 'servedfrom_logo', 'location_url',])
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
  knex('dishes')
    .update({
      plate_name: req.body.plate_name,
      prepared_by: req.body.prepared_by,
      description: req.body.description,
      ingredients: req.body.ingredients,
      photo_url: req.body.photo_url,
      paired_with: req.body.paired_with,
      paired_logo: req.body.paired_logo,
      paired_with_desc: req.body.paired_with_desc,
      servedfrom: req.body.servedfrom,
      servedfrom_logo: req.body.servedfrom_logo
    }, ['id', 'plate_name', 'prepared_by', 'description', 'ingredients', 'photo_url', 'paired_with', 'paired_logo', 'paired_with_desc', 'servedfrom', 'servedfrom_logo', 'location_url'])
    .where({id: req.params.id})
    .then((result) => {
      console.log("RESULT", result[0]);
      res.send(result[0]);
    })
    .catch((err)=>{
      res.send(err);
    });
});

router.delete('/:id', (req,res,next)=>{
  knex('dishes')
  .where('id', req.params.id)
  .first()
  .then((response)=>{
    console.log(response);
    let toDelete = camelizeKeys(response);
    return knex('dishes')
    .where('id', toDelete.id)
    .del()
    .then((deleted)=>{
      res.send(toDelete);
  });
});
});


module.exports = router;
