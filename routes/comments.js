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
  knex('comments')
    .select('id', 'user_id', 'post_id', 'chef_id', 'comment_body')
    .then((results) => {
      res.json(results);
    })
    .catch((err)=>{
      res.send(err);
    });
});

router.get('/:postId', (req, res, next) => {
  knex('comments')
  .where('posts.id', req.params.postId)
  .join('posts', 'comments.post_id', '=', 'posts.id')
  .join('users', 'comments.user_id', '=', 'users.id')
  .select('posts.id', 'comment_body', 'users.username', 'comments.user_id')
  // .orderBy('id')
  .then((data) => {
    data = camelizeKeys(data);
    res.header('Access-Control-Allow-Origin', '*');
    res.send(data);
  })
  .catch((err) => {
      next(err);
    });
});

router.get('/:chefId', (req, res, next) => {
  knex('comments')
  .where('chefs.id', req.params.chefId)
  .join('chefs', 'comments.chef_id', '=', 'chefs.id')
  .join('users', 'comments.user_id', '=', 'users.id')
  .select('chefs.id', 'comment_body', 'users.username', 'comments.user_id')
  // .orderBy('id')
  .then((data) => {
    data = camelizeKeys(data);
    res.header('Access-Control-Allow-Origin', '*');
    res.send(data);
  })
  .catch((err) => {
      next(err);
    });
});

// router.get('/:chefId', (req, res, next) => {
//   knex('posts')
//   .where('posts.id', req.params.postId)
//   .join('comments', 'posts.id', '=', 'comments.post_id')
//   .join('chefs', 'comments.chef_id', '=', 'chefs.id')
//   .join('users', 'comments.user_id', '=', 'users.id')
//   .select('posts.id', 'comment_body', 'comments.created_at', 'users.profile_url', 'users.username', 'comments.user_id')
//   .orderBy('comments.created_at')
//   .then((data) => {
//     data = camelizeKeys(data);
//     res.header('Access-Control-Allow-Origin', '*');
//     res.send(data);
//   })
//   .catch((err) => {
//       next(err);
//     });
// });
//
// router.get('/:userId', (req, res, next) => {
//   knex('posts')
//   .where('posts.id', req.params.postId)
//   .join('comments', 'posts.id', '=', 'comments.post_id')
//   .join('users', 'comments.user_id', '=', 'users.id')
//   .select('posts.id', 'comment_body', 'comments.created_at', 'users.profile_url', 'users.username', 'comments.user_id')
//   .orderBy('comments.created_at')
//   .then((data) => {
//     data = camelizeKeys(data);
//     res.header('Access-Control-Allow-Origin', '*');
//     res.send(data);
//   })
//   .catch((err) => {
//       next(err);
//     });
// });



module.exports = router;


// 'use strict';
//
// // DEPENDENCIES -----------------------------------------
// const express = require('express');
// const router = express.Router();
//
// const knex = require('../knex');
//
// const {camelizeKeys, decamelizeKeys} = require('humps');
// const boom = require('boom');
//
//
// //ROUTES ------------------------------------------------
//
// //get comments by post id
// router.get('/:postId', (req, res, next) => {
//   knex('posts')
//   .where('posts.id', req.params.postId)
//   .join('comments', 'posts.id', '=', 'comments.post_id')
//   .join('users', 'comments.user_id', '=', 'users.id')
//   .select('posts.id', 'comment_body', 'users.id')
//   .orderBy('id')
//   .then((data) => {
//     data = camelizeKeys(data);
//     res.header('Access-Control-Allow-Origin', '*');
//     res.send(data);
//   })
//   .catch((err) => {
//       next(err);
//     });
// });
//
// router.get('/:chefId', (req, res, next) => {
//   knex('chefs')
//   .where('chef.id', req.params.chefId)
//   .join('comments', 'chefs.id', '=', 'comments.chef_id')
//   .join('users', 'comments.user_id', '=', 'users.id')
//   .select('chefs.id', 'comment_body', 'users.id')
//   .orderBy('id')
//   .then((data) => {
//     data = camelizeKeys(data);
//     res.header('Access-Control-Allow-Origin', '*');
//     res.send(data);
//   })
//   .catch((err) => {
//       next(err);
//     });
// });
//
// router.post('/', (req, res, next) =>{
//   let adding = {
//     user_id: req.body.userId,
//     post_id: req.body.postId,
//     comment_body: req.body.commentBody
//   };
//   console.log(adding);
//   knex('comments')
//   .insert(adding, '*')
//   .then((result) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.send(camelizeKeys(result[0]));
//   })
//   .catch((err) => {
//       next(err);
//     });
// });
// router.post('/', (req, res, next) =>{
//   let adding = {
//     user_id: req.body.userId,
//     chef_id: req.body.chefId,
//     comment_body: req.body.commentBody
//   };
//   console.log(adding);
//   knex('comments')
//   .insert(adding, '*')
//   .then((result) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.send(camelizeKeys(result[0]));
//   })
//   .catch((err) => {
//       next(err);
//     });
// });
//
// // EXPORTS ---------------------------
// module.exports = router;
