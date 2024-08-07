const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'alumni'], required: true },
  bio: { type: String },
  fromYear: { type: Number },
  toYear: { type: Number },
  department: { type: String },
  currentCompany: { type: String },
  contactNumber: { type: String },
  confirmedevents: [{ type: String }],
});

module.exports = mongoose.model('User', UserSchema);
