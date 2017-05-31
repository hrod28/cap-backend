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


router.get('/', (req, res) => {
  knex('perks')
    .orderBy('id', 'asc')
    .select('id', 'title', 'description', 'picture_url', 'time')
    .then((results) => {
      res.json(results);
      console.log(results);
    })
    .catch((err)=>{
      res.send(err);
    });
});

router.get('/:id', (req,res) => {
  knex('perks')
    .select('id', 'title', 'description', 'picture_url', 'time')
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
  knex('perks')
    .insert({
      title: req.body.title,
      description: req.body.description,
      picture_url: req.body.picture_url,
      time: req.body.time
    }, ['id', 'title', 'description', 'picture_url', 'time'])
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
  knex('perks')
    .update({
      title: req.body.title,
      description: req.body.description,
      picture_url: req.body.picture_url,
      time: req.body.time
    }, ['id', 'title', 'description', 'picture_url', 'time'])
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
  knex('perks')
  .where('id', req.params.id)
  .first()
  .then((response)=>{
    console.log(response);
    let toDelete = camelizeKeys(response);
    return knex('perks')
    .where('id', toDelete.id)
    .del()
    .then((deleted)=>{
      res.send(toDelete);
  });
});
});

module.exports = router;

// router.get('/:id', (req, res) => {
//   console.log('top get :id route');
//     knex('posts')
//     .where('posts.id', req.params.id)
//     .select('posts.id', 'user_id', 'post_body')
//     .join('users', 'posts.user_id', '=', 'users.id')
//     // .join('post_skills', 'posts.id', '=', 'post_skills.post_id')
//     // .join('skills', 'post_skills.skill_id', '=', 'skills.id')
//     // .orderBy('id')
//     // .select('user_id', 'users.username', 'users.user_bio', 'skills.skill_name', 'post_skills.skill_id')
//     .then((data) => {
//
//         data = camelizeKeys(data);
//
//         let finalData = {};
//
//         for (var obj in data) {
//                 finalData[data[obj].id] = {
//                     "id": data[obj].id,
//                     "users_id": data[obj].userId,
//                     "post_body": data[obj].postBody,
//                 };
//             }
//
//         res.header('Access-Control-Allow-Origin', '*');
//         res.send(finalData);
//     });
// });
//
// router.post('/', (req, res, next)=>{
//   var newPost = {
//     id: req.params.id,
//     user_id: req.body.userId,
//     post_body: req.body.postBody
//   };
//   knex('posts')
//   .insert(newPost, '*')
//   .then((addedPost)=> {
//     addedPost = camelizeKeys(addedPost);
//     res.header('Access-Control-Allow-Origin', '*');
//     console.log('bottom post');
//     res.send(addedPost);
//   });
// });//router.post close
//
// router.patch('/:id', (req, res)=>{
//   console.log('top of patch function');
//   knex('posts')
//     .join('users', 'users.id', '=', 'posts.user_id')
//     .insert({
//       user_id: req.body.userId,
//       post_body: req.body.post_body,
//     }, ['id', 'user_id', 'post_body'])
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
//   knex('posts')
//   .where('id', req.params.id)
//   .first()
//   .then((response)=>{
//     console.log(response);
//     // if (!response) {
//     //   next(boom.create(400, 'Post does not exist'));
//     // }
//     let toDelete = camelizeKeys(response);
//     return knex('posts')
//     .where('id', toDelete.id)
//     .del()
//     .then((deleted)=>{
//       // delete toDelete.id
//       res.send(toDelete);
//     // }).catch((err) => {
//     //       console.error(err);
//     //       next(boom.create(400, 'Failed2'));
//     //     })
//   });
// });
// });
