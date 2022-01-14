const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
  const postQuery = Post.find();
  let fetchedPosts;
  postQuery
    .then((documents) => {
      fetchedPosts = documents;
    })
    .then(() => {
      res.status(200).json({
        message: 'Posts fetched successfully!',
        posts: fetchedPosts,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Fetching posts failed!',
      });
    });
};

exports.createPost = (req, res, next) => {
  const name = req.body.name;
  const title = req.body.title;
  const feedback_content = req.body.feed_backcontent;
  const comment_content = req.body.comment_content;
  const contact_content = req.body.contact_content;
  const post = new Post({
    name:name,
    title: title,
    feedback_content: feedback_content,
    comment_content: comment_content,
    contact_content: contact_content
  });
  post
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Post created successfully!',
        post: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deletePost = (req, res, next) => {
  Post.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.status(200).json({ message: 'Deletion successful!' });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Fetching posts failed!',
      });
    });
};

exports.updatePost = (req, res, next) => {
  Post.findByIdAndUpdate(
    { _id: req.params.id },
    {
      name:req.body.name,
      title: req.body.title,
      feedback_content: req.body.feedback_content,
      comment_content: req.body.comment_content,
      contact_content:req.body.contact_content
    }
  )
    .then((result) => {
      res.status(200).json({ message: 'Update successful!' });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Could not update post!',
      });
    });
};