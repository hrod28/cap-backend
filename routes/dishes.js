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
  console.log('top get route');
    knex('dishes')
    // .where('dishes.id', req.params.id)
    .select('dishes.id', 'chef_id', 'plate_name', 'description', 'ingredients', 'photo_url')
    .join('chefs', 'dishes.chef_id', '=', 'chefs.id')
    .then((data) => {

        data = camelizeKeys(data);

        let finalData = {};

        for (var obj in data) {
                finalData[data[obj].id] = {
                    "id": data[obj].id,
                    "chef_id": data[obj].chefId,
                    "plate_name": data[obj].plateName,
                    "description": data[obj].description,
                    "ingredients": data[obj].ingredients,
                    "photo_url": data[obj].photoUrl,
                };
            }

        res.header('Access-Control-Allow-Origin', '*');
        res.send(finalData);
    });
});


router.get('/:id', (req, res) => {
  console.log('top get :id route');
    knex('dishes')
    .where('dishes.id', req.params.id)
    .select('dishes.id', 'chef_id', 'plate_name', 'description', 'ingredients', 'photo_url')
    .join('chefs', 'dishes.chef_id', '=', 'chefs.id')
    .then((data) => {

        data = camelizeKeys(data);

        let finalData = {};

        for (var obj in data) {
                finalData[data[obj].id] = {
                    "id": data[obj].id,
                    "chef_id": data[obj].chefId,
                    "plate_name": data[obj].plateName,
                    "description": data[obj].description,
                    "ingredients": data[obj].ingredients,
                    "photo_url": data[obj].photoUrl,
                };
            }

        res.header('Access-Control-Allow-Origin', '*');
        res.send(finalData);
    });
});

router.post('/', (req, res, next)=>{
  var newDish = {
    id: req.params.id,
    chef_id: req.body.chefId,
    plate_name: req.body.plateName,
    description: req.body.description,
    ingredients: req.body.ingredients,
    photo_url: req.body.photoUrl
  };
  knex('dishes')
  .insert(newDish, '*')
  .then((addedPost)=> {
    addedPost = camelizeKeys(addedPost);
    res.header('Access-Control-Allow-Origin', '*');
    console.log('bottom post');
    res.send(addedPost);
  });
});//router.post close


router.patch('/:id', (req, res)=>{
  console.log('top of patch function');
  knex('dishes')
    .join('chefs', 'chefs.id', '=', 'dishes.chef_id')
    .insert({
      chef_id: req.body.chef_id,
      plate_name: req.body.plate_name,
      description: req.body.description,
      ingredients: req.body.ingredients,
      photo_url: req.body.photo_url
    }, ['id', 'chef_id', 'plate_name', 'description', 'ingredients', 'photo_url'])
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
  knex('posts')
  .where('id', req.params.id)
  .first()
  .then((response)=>{
    console.log(response);
    if (!response) {
      next(boom.create(400, 'Post does not exist'));
    }
    let toDelete = camelizeKeys(response);
    return knex('posts')
    .where('id', toDelete.id)
    .del()
    .then((deleted)=>{
      // delete toDelete.id
      res.send(toDelete);
    });
});
});

module.exports = router;
