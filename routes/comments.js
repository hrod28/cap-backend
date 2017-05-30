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
  knex('comments')
    .orderBy('id', 'asc')
    .select('id', 'time', 'title', 'description')
    .then((results) => {
      res.json(results);
    })
    .catch((err)=>{
      res.send(err);
    });
});
router.get('/:id', (req, res) => {
  knex('comments')
    .select('id', 'time', 'title', 'description')
    .where({id: req.params.id})
    .then((results) => {
      res.json(results);
    })
    .catch((err)=>{
      res.send(err);
    });
});

router.post('/', (req, res) => {
  knex('comments')
    .insert({
      time: req.body.time,
      title: req.body.title,
      description: req.body.description
    }, ['id', 'time', 'title', 'description'])
    .then((result) => {
      res.send(result[0]);
    })
    .catch((err)=>{
      res.send(err);
    });
});

router.patch('/:id', (req, res) => {
  knex('comments')
    .update({
      time: req.body.time,
      title: req.body.title,
      description: req.body.description
    }, ['id', 'time', 'title', 'description'])
    .where({id: req.params.id})
    .then((result) => {
      res.send(result[0]);
    })
    .catch((err)=>{
      res.send(err);
    });
});
router.delete('/:id', (req, res) => {
  knex('comments')
    .where('id', req.params.id)
    .first()
    .then((response) => {
      console.log(response);
      let toDelete = camelizeKeys(response);
      return knex('comments')
      .where('id', toDelete.id)
      .del()
      .then((deleted)=>{
        res.send(toDelete);
    });
});

});


module.exports = router;
