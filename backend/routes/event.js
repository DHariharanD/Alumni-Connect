const express = require('express');
const { createEvent, getEvents, respondToEvent } = require('../controllers/eventController');
const auth = require('../middleware/auth'); // Assuming authentication middleware exists
const router = express.Router();

router.post('/events', auth, createEvent);
router.get('/events', auth, getEvents);
router.post('/events/respond', auth, respondToEvent); // New route for handling event responses

module.exports = router;
