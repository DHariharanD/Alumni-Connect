import React, { useState, useEffect } from 'react';
import API from '../services/api';

const Profile = () => {
  const [formData, setFormData] = useState({
    bio: '',
    fromYear: '',
    toYear: '',
    department: '',
    currentCompany: '',
    contactNumber: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get('/users/profile');
        setFormData(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.put('/users/profile', formData);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea name="bio" placeholder="Bio" onChange={handleChange} value={formData.bio} />
      <input type="number" name="fromYear" placeholder="From Year" onChange={handleChange} value={formData.fromYear} />
      <input type="number" name="toYear" placeholder="To Year" onChange={handleChange} value={formData.toYear} />
      <input type="text" name="department" placeholder="Department" onChange={handleChange} value={formData.department} />
      <input type="text" name="currentCompany" placeholder="Current Company" onChange={handleChange} value={formData.currentCompany} />
      <input type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} value={formData.contactNumber} />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default Profile;
