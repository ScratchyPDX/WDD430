const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.post('/api/posts', (req, res, next) => {
  const post = {
    id: Math.random().toString().slice(2),
    title: req.body.title,
    content: req.body.content
  };
  res.status(201).json({
    message: 'Post created successfully!',
    post: post
  });
});

app.use('/api/posts', (req, res, next) => {
  const posts = [
    { id: '1', title: 'First Post', content: 'This is the first post' },
    { id: '2', title: 'Second Post', content: 'This is the second post' }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});



module.exports = app;
