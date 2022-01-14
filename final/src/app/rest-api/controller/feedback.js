const Feedback = require('../models/feedback');

exports.getFeedbacks = (req, res, next) => {
  const feedbackQuery = Feedback.find();
  let fetchedPosts;
  feedbackQuery
    .then((documents) => {
      fetchedPosts = documents;
    })
    .then(() => {
      res.status(200).json({
        message: 'Feedbacks fetched successfully!',
        posts: fetchedPosts,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Fetching feedback failed!',
      });
    });
};

exports.createFeedback = (req, res, next) => {
  const id = req.body.id;
  const content = req.body.content;
  const feedback = new Feedback({
    id:id,
    content: content,
  });
  feedback
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Feedback created successfully!',
        post: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteFeedback = (req, res, next) => {
  Feedback.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.status(200).json({ message: 'Deletion successful!' });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Fetching feedback failed!',
      });
    });
};

exports.updateFeedback = (req, res, next) => {
  Feedback.findByIdAndUpdate(
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
        message: 'Could not update feedback!',
      });
    });
};