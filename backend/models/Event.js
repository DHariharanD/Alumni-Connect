const mongoose = require('mongoose');
const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  confirmedusers: [{ type: String,}],
  
  incrementingValue: { type: Number, default: 0 }
});
module.exports = mongoose.model('Event', EventSchema);
