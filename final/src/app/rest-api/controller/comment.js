const Comment = require('../models/comment');

exports.getComments = (req, res, next) => {
  const commentQuery = Comment.find();
  let fetchedPosts;
  commentQuery
    .then((documents) => {
      fetchedPosts = documents;
    })
    .then(() => {
      res.status(200).json({
        message: 'Comments fetched successfully!',
        posts: fetchedPosts,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Fetching comment failed!',
      });
    });
};

exports.createComment = (req, res, next) => {
  const id = req.body.id;
  const content = req.body.content;
  const comment = new Comment({
    id:id,
    content: content,
  });
  comment
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Comment created successfully!',
        post: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteComment = (req, res, next) => {
  Comment.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.status(200).json({ message: 'Deletion successful!' });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Fetching comment failed!',
      });
    });
};

exports.updateComment = (req, res, next) => {
  Comment.findByIdAndUpdate(
    { _id: req.params.id },
    {
      id:req.body.id,
      content: req.body.content
    }
  )
    .then((result) => {
      res.status(200).json({ message: 'Update successful!' });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Could not update comment!',
      });
    });
};