const express = require('express');
const { getUserProfile, updateUserProfile, getAlumni, deleteAlumni, createEvent } = require('../controllers/userController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/profile', auth, getUserProfile);
router.put('/profile', auth, updateUserProfile);
router.get('/alumni', auth, getAlumni);
router.delete('/alumni/:id', auth, deleteAlumni);
router.post('/events', auth, createEvent);

module.exports = router;
