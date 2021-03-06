'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

var port = process.env.PORT || 3000;

app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const users = require('./routes/users');
const chefs = require('./routes/chefs');
const posts = require('./routes/posts');
const brewers = require('./routes/brewers');
const votes = require('./routes/votes');
const comments = require('./routes/comments');
const perks = require('./routes/perks');
const thanks = require('./routes/thanks');
const dishes = require('./routes/dishes');

app.use('/api/users', users);
app.use('/api/chefs', chefs);
app.use('/api/brewers', brewers);
app.use('/api/posts', posts);
app.use('/api/votes', votes);
app.use('/api/thanks', thanks);
app.use('/api/comments', comments);
app.use('/api/perks', perks);
app.use('/api/dishes', dishes);

app.listen(port, function () {
  console.log('Listening on port', port);
});
