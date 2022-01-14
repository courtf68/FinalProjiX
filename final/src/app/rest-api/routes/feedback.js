const express = require('express');

const feedbackController = require('../controllers/feedback');

const router = express.Router();

router.get('/feedbacks', feedbackController.getFeedbacks);
router.post('/feedback', feedbackController.createFeedback);
router.delete('/:id', feedbackController.deleteFeedback);
router.put('/:id', feedbackController.updateFeedback);

module.exports = router;