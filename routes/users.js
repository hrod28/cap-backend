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
  knex('users')
    .select('id', 'first_name', 'last_name', 'username', 'password', 'email', 'visited_all', 'vote1', 'vote2', 'is_admin')
    .then((results) => {
      res.json(results);
    })
    .catch((err)=>{
      res.send(err);
    });
});


// router.get('/:id', (req,res) => {
//   knex('users')
//     .select('id', 'first_name', 'last_name', 'username', 'email')
//     .where({id: req.params.id})
//     .then((results) => {
//       res.json(results[0]);
//     })
//     .catch((err)=>{
//       res.send(err);
//     });
// });
//
// router.get('/username/:username', (req, res, next) => {
//   var username = req.params.username;
//
//   knex('users')
//   .where('username', username)
//   .then((userData) => {
//     res.send(userData[0]);
//   });
// });
//
router.post('/', (req,res) => {
  console.log('reach post route');
  knex('users')
    .insert({
      'id': req.body.id,
      'first_name': req.body.first_name,
      'last_name': req.body.last_name,
      'username': req.body.username,
      'password': req.body.password,
      'email': req.body.email,
      'visited_all': req.body.visited_all,
      'vote1': req.body.vote1,
      'vote2': req.body.vote2,
      'is_admin': req.body.isAdmin
    }, ['id', 'first_name', 'last_name', 'username', 'password', 'email', 'visited_all', 'vote1', 'vote2', 'is_admin'])
    .then((result) => {
      console.log("RESULT", result[0]);
      res.send(result[0]);
    })
    .catch((err)=>{
      res.send(err);
    });
});

module.exports = router;
//
// router.patch('/:id', (req, res)=>{
//   console.log('top of patch function');
//   knex('users')
//     .insert({
//       'first_name': req.body.first_name,
//       'last_name': req.body.lastName,
//       'username': req.body.username,
//       'password': req.body.password,
//       'email': req.body.email,
//       'is_admin': req.body.isAdmin
//     }, ['id', 'first_name', 'last_name', 'username', 'password', 'email', 'is_admin'])
//     .then((result) => {
//       console.log("RESULT", result[0]);
//       res.send(result[0]);
//       console.log('end of patch function');
//     })
//     .catch((err)=>{
//       res.send(err);
//     });
// });
//
// router.delete('/:id', (req,res,next)=>{
//   knex('users')
//   .where('id', req.params.id)
//   .first()
//   .then((response)=>{
//     console.log(response);
//     let toDelete = camelizeKeys(response);
//     return knex('users')
//     .where('id', toDelete.id)
//     .del()
//     .then((deleted)=>{
//       res.send(toDelete);
//   });
// });
// });
