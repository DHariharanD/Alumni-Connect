<<<<<<< HEAD
const mongoose = require('mongoose');
=======
// Assuming this is in your models.js or a similar file
const mongoose = require('mongoose');

>>>>>>> d7d7588074994b7c7aa7dc1cee7c00a47ca67dd9
const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
<<<<<<< HEAD
  confirmedusers: [{ type: String,}],
  
  incrementingValue: { type: Number, default: 0 }
});
module.exports = mongoose.model('Event', EventSchema);
=======
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

>>>>>>> d7d7588074994b7c7aa7dc1cee7c00a47ca67dd9
