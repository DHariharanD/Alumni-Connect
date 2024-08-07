const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (req, res) => {
  const { name, email, password, role, bio, fromYear, toYear, department, currentCompany, contactNumber, adminKey } = req.body;

  if (role === 'admin' && adminKey !== '0XTEAM') {
    return res.status(400).send('Invalid admin key');
  }

  const userData = {
    name,
    email,
    password: await bcrypt.hash(password, 8),
    role,
  };

  if (role === 'alumni') {
    userData.bio = bio;
    userData.fromYear = fromYear;
    userData.toYear = toYear;
    userData.department = department;
    userData.currentCompany = currentCompany;
    userData.contactNumber = contactNumber;
  }

  const user = new User(userData);
  await user.save();

  const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET);
  res.status(201).send({ user, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).send('Invalid login credentials');
  }

  const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET);
  res.send({ user, token });
};

module.exports = { register, login };
