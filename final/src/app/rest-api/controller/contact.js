const Contact = require('../models/contact');

exports.getContacts = (req, res, next) => {
  const contactQuery = Contact.find();
  let fetchedPosts;
  contactQuery
    .then((documents) => {
      fetchedPosts = documents;
    })
    .then(() => {
      res.status(200).json({
        message: 'Contacts fetched successfully!',
        posts: fetchedPosts,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Fetching contact failed!',
      });
    });
};

exports.createContact = (req, res, next) => {
  const id = req.body.id;
  const content = req.body.content;
  const contact = new Contact({
    id:id,
    content: content,
  });
  contact
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Contact created successfully!',
        post: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteContact = (req, res, next) => {
  Contact.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.status(200).json({ message: 'Deletion successful!' });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Fetching contact failed!',
      });
    });
};

exports.updateContact = (req, res, next) => {
  Contact.findByIdAndUpdate(
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
        message: 'Could not update contact!',
      });
    });
};