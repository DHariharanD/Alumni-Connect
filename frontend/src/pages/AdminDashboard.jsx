import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

const AdminDashboard = () => {
  const [adminName, setAdminName] = useState('');
  const [alumni, setAlumni] = useState([]);
  const [events, setEvents] = useState([]);
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const res = await API.get('/users/profile');
        setAdminName(res.data.name);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchAlumni = async () => {
      const res = await API.get('/users/alumni');
      setAlumni(res.data);
    };

    const fetchEvents = async () => {
      const res = await API.get('/events');
      setEvents(res.data);
    };

    fetchAdminData();
    fetchAlumni();
    fetchEvents();
  }, []);

  const handleDeleteAlumni = async (id) => {
    try {
      await API.delete(`/users/alumni/${id}`);
      setAlumni(alumni.filter((alumnus) => alumnus._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/events', eventData);
      setEvents([...events, res.data]);
      alert('Event created successfully');
      setEventData({ title: '', description: '', date: '' });
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center mb-8">
          <img src="https://pesce.ac.in/img/pes%20logo%201.svg" alt="Logo" className="h-20" />
          <br />
          <br />
          <h1 className='text-center font-bold text-4xl text-green-600'>PESCE Alumini Admin Portal</h1>
        </div>
        <div className="flex justify-end mb-8">
          <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700">
            Logout
          </button>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
          <h2 className="text-xl font-semibold text-gray-600 mb-6">Welcome, <span className='text-blue-600'>{adminName}</span></h2>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">All Alumni's</h2>
            <ul className="space-y-4">
              {alumni.map((alumnus) => (
                <li key={alumnus._id} className="bg-gray-50 p-4 rounded-lg shadow-sm flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold text-gray-800">{alumnus.name}</p>
                    <p className="text-sm text-gray-600">E-mail: {alumnus.email}</p>
                    <p className="text-sm text-gray-600">Contact Number: {alumnus.contactNumber}</p>
                    <p className="text-sm text-gray-600">Current Company: {alumnus.currentCompany}</p>
                    <p className="text-sm text-gray-600">Department: {alumnus.department}</p>
                    <p className="text-sm text-gray-600">From Year: {alumnus.fromYear}</p>
                    <p className="text-sm text-gray-600">To Year: {alumnus.toYear}</p>
                    <p className="text-sm text-gray-600">Details: {alumnus.bio}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteAlumni(alumnus._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Create Event</h2>
            <form onSubmit={handleCreateEvent} className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-2">Event Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Event Title"
                  value={eventData.title}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Event Description</label>
                <textarea
                  name="description"
                  placeholder="Event Description"
                  value={eventData.description}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Event Date</label>
                <input
                  type="date"
                  name="date"
                  value={eventData.date}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Create Event
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Created Events</h2>
            <ul className="space-y-4">
              {events.map((event) => (
                <li key={event._id} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800"><span className='text-blue-600'>Event: </span>{event.title}</h3>
                  <p className="text-sm text-gray-600 break-words"><span className='text-blue-600'>Details: </span>{event.description}</p>
                  <p className="text-sm text-gray-600"><span className='text-blue-600'>Date: </span>{new Date(event.date).toLocaleDateString()}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
