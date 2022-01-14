const express = require('express');

const commentController = require('../controllers/comment');

const router = express.Router();

router.get('/comments', commentController.getComments);
router.post('/comment', commentController.createComment);
router.delete('/:id', commentController.deleteComment);
router.put('/:id', commentController.updateComment);

module.exports = router;