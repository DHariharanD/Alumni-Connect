<<<<<<< HEAD
const Event = require('../models/Event');

=======
const Event = require('../models/Event'); // Adjust the path as necessary

// Function to create a new event
>>>>>>> d7d7588074994b7c7aa7dc1cee7c00a47ca67dd9
const createEvent = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).send('Access denied');
  }

  const event = new Event(req.body);
  await event.save();
  res.status(201).send(event);
};

<<<<<<< HEAD
=======
// Function to retrieve all events
>>>>>>> d7d7588074994b7c7aa7dc1cee7c00a47ca67dd9
const getEvents = async (req, res) => {
  const events = await Event.find();
  res.send(events);
};

<<<<<<< HEAD
const attendees  = async(req, res)=>{
  try {
    // Extract the event ID from the request parameters (assuming it's passed as a URL parameter)
    const { eventId } = req.body;

    // Find the event by ID and increment the incrementingValue field
    const updatedEvent = await Event.findByIdAndUpdate(
      eventId,
      { $inc: { incrementingValue: 1 } },
      { new: true } // return the updated document
    );

    // If the event is not found, send a 404 response
    if (!updatedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Send the updated event as the response
    res.status(200).json(updatedEvent);
  } catch (error) {
    // Handle any errors that occur
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
module.exports = { createEvent, getEvents, attendees };
=======
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
>>>>>>> d7d7588074994b7c7aa7dc1cee7c00a47ca67dd9
