const express = require('express');

const router = express.Router();

const authMiddleware = require('../middlewares/authenticateToken');

const messageController = require('../controllers/messageController');
const conversationController = require('../controllers/conversationController');
const authController = require('../controllers/authenticationController');

const prefix = '/api';

router.get(`${prefix}/messages`, authMiddleware, messageController.list);
router.post(`${prefix}/messages`, authMiddleware, messageController.create);
router.delete(`${prefix}/messages`, authMiddleware, messageController.delete);

router.get(`${prefix}/conversations`, authMiddleware, conversationController.list);
router.post(`${prefix}/conversations`, authMiddleware, conversationController.create);

router.post(`${prefix}/authenticate`, authController.authenticate);

module.exports = router;
