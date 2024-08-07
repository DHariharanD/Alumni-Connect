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
<<<<<<< HEAD
  confirmedevents: [{ type: String }],
=======
>>>>>>> d7d7588074994b7c7aa7dc1cee7c00a47ca67dd9
});

module.exports = mongoose.model('User', UserSchema);
