// Assuming this is in your models.js or a similar file
const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  nonAttendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

// Method to add attendee
EventSchema.methods.addAttendee = function(userId) {
  this.attendees.push(userId);
  return this.save();
};

// Method to remove attendee
EventSchema.methods.removeAttendee = function(userId) {
  const index = this.attendees.indexOf(userId);
  if (index !== -1) {
    this.attendees.splice(index, 1);
  }
  return this.save();
};

// Similar methods for nonAttendees can be added here

module.exports = mongoose.model('Event', EventSchema);

