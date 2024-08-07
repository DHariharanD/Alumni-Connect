const Event = require('../models/Event');

const createEvent = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).send('Access denied');
  }

  const event = new Event(req.body);
  await event.save();
  res.status(201).send(event);
};

const getEvents = async (req, res) => {
  const events = await Event.find();
  res.send(events);
};

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
