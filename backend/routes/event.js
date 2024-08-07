const express = require('express');
<<<<<<< HEAD
const { createEvent, getEvents, attendees } = require('../controllers/eventController');
const auth = require('../middleware/auth');
=======
const { createEvent, getEvents, respondToEvent } = require('../controllers/eventController');
const auth = require('../middleware/auth'); // Assuming authentication middleware exists
>>>>>>> d7d7588074994b7c7aa7dc1cee7c00a47ca67dd9
const router = express.Router();

router.post('/events', auth, createEvent);
router.get('/events', auth, getEvents);
<<<<<<< HEAD
router.post('/eventattendees',attendees);
=======
router.post('/events/respond', auth, respondToEvent); // New route for handling event responses
>>>>>>> d7d7588074994b7c7aa7dc1cee7c00a47ca67dd9

module.exports = router;
