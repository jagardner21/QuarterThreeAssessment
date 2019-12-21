const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messagesController')

/* GET home page. */
router.get('/messages', messagesController.getAllMessages)
router.post('/messages', messagesController.addMessage)
router.patch('/messages/:id', messagesController.editMessage)
router.delete('/messages/:id', messagesController.deleteMessage)

module.exports = router;
