// Create web server

// Import modules
const express = require('express');
const router = express.Router();

// Import model
const Comment = require('../models/comment');

// Import middleware
const auth = require('../middleware/auth');

// Import controller
const commentCtrl = require('../controllers/comment');

// Routes
router.get('/', auth, commentCtrl.getAllComments);
router.get('/:id', auth, commentCtrl.getOneComment);
router.post('/', auth, commentCtrl.createComment);
router.put('/:id', auth, commentCtrl.modifyComment);
router.delete('/:id', auth, commentCtrl.deleteComment);

module.exports = router;