const express = require('express');
const { createEvent, getEvents, attendees } = require('../controllers/eventController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/events', auth, createEvent);
router.get('/events', auth, getEvents);
router.post('/eventattendees',attendees);

module.exports = router;
