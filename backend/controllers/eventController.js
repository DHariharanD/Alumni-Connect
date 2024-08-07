const Event = require('../models/Event'); // Adjust the path as necessary

// Function to create a new event
const createEvent = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).send('Access denied');
  }

  const event = new Event(req.body);
  await event.save();
  res.status(201).send(event);
};

// Function to retrieve all events
const getEvents = async (req, res) => {
  const events = await Event.find();
  res.send(events);
};

// Function to handle user responses to events
const respondToEvent = async (req, res) => {
  const { eventId, userId, response } = req.body;
  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).send('Event not found');
    }

    // Update attendees or nonAttendees based on user response
    if (response === 'attend') {
      if (!event.attendees.includes(userId)) {
        event.attendees.push(userId);
      }
      // Optionally, remove userId from nonAttendees if present
    } else if (response === 'busy') {
      if (!event.nonAttendees.includes(userId)) {
        event.nonAttendees.push(userId);
      }
      // Optionally, remove userId from attendees if present
    }

    await event.save(); // Save the updated event document
    res.status(200).send({ message: 'Response recorded', event });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Exporting the controller functions
module.exports = { createEvent, getEvents, respondToEvent };
