const User = require('../models/User');
const Event = require('../models/Event');

const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateUserProfile = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['bio', 'fromYear', 'toYear', 'department', 'currentCompany', 'contactNumber'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const user = await User.findById(req.user._id);
    updates.forEach(update => user[update] = req.body[update]);
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAlumni = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).send('Access denied');
  }

  const alumni = await User.find({ role: 'alumni' });
  res.send(alumni);
};

const deleteAlumni = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).send('Access denied');
  }

  const alumniId = req.params.id;
  await User.findByIdAndDelete(alumniId);
  res.send({ message: 'Alumni deleted successfully' });
};

const createEvent = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).send('Access denied');
  }

  const event = new Event(req.body);
  await event.save();
  res.status(201).send(event);
};

module.exports = { getUserProfile, updateUserProfile, getAlumni, deleteAlumni, createEvent };
