import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import API from '../services/api'; // Ensure this is correctly imported
=======
import API from '../services/api';
>>>>>>> d7d7588074994b7c7aa7dc1cee7c00a47ca67dd9

const Home = () => {
  const [userData, setUserData] = useState({});
  const [events, setEvents] = useState([]);
  const [responses, setResponses] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await API.get('/users/profile');
        setUserData(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchEvents = async () => {
      try {
        const res = await API.get('/events');
        setEvents(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserData();
    fetchEvents();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleResponse = async (eventId, response) => {
<<<<<<< HEAD
    setResponses(prevResponses => ({
      ...prevResponses,
      [eventId]: response
    }));

    if (response === 'attend') {
      try {
        // Post request to update attendees
        const res = await API.post('/eventattendees', { eventId });
        // Update the state with new attendees count
        setEvents(prevEvents => prevEvents.map(event => 
          event._id === eventId ? { ...event, incrementingValue: res.data.incrementingValue } : event
        ));
        console.log('Incremented the incrementingValue for event:', eventId);
      } catch (err) {
        console.error('Failed to update attendance:', err);
      }
=======
    try {
      await API.post('/events/respond', { eventId, userId: userData._id, response });
      setResponses(prevResponses => ({
        ...prevResponses,
        [eventId]: response
      }));
    } catch (err) {
      console.error(err);
>>>>>>> d7d7588074994b7c7aa7dc1cee7c00a47ca67dd9
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
<<<<<<< HEAD
        <div className="flex flex-col justify-center mb-8">
          <img src="https://pesce.ac.in/img/pes%20logo%201.svg" alt="Logo" className="h-20" />
          <br />
          <br />
          <h1 className='text-center font-bold text-4xl text-blue-600'>PESCE Alumini Portal</h1>
        </div>
        <div className="flex justify-end mb-8">
          <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700">
            Logout
          </button>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome, <span className='text-green-600'>{userData.name}</span></h1>
          <h2 className="text-xl font-semibold text-gray-600 mb-2">Your Details:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-lg font-medium text-gray-800">Name: <span className="font-normal">{userData.name}</span></p>
              <p className="text-lg font-medium text-gray-800">Email: <span className="font-normal">{userData.email}</span></p>
              <p className="text-lg font-medium text-gray-800">Details: <span className="font-normal">{userData.bio}</span></p>
              <p className="text-lg font-medium text-gray-800">Department: <span className="font-normal">{userData.department}</span></p>
            </div>
            <div>
              <p className="text-lg font-medium text-gray-800">From Year: <span className="font-normal">{userData.fromYear}</span></p>
              <p className="text-lg font-medium text-gray-800">To Year: <span className="font-normal">{userData.toYear}</span></p>
              <p className="text-lg font-medium text-gray-800">Current Company: <span className="font-normal">{userData.currentCompany}</span></p>
              <p className="text-lg font-medium text-gray-800">Contact Number: <span className="font-normal">{userData.contactNumber}</span></p>
            </div>
          </div>
        </div>
=======
        {/* Existing UI elements remain unchanged */}

>>>>>>> d7d7588074994b7c7aa7dc1cee7c00a47ca67dd9
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Events:</h2>
          <ul className="space-y-4">
            {events.map((event) => (
              <li key={event._id} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800"><span className='text-green-500'>Event: </span>{event.title}</h3>
                <p className="text-sm text-gray-600 break-words"><span className='text-green-500'>Details: </span>{event.description}</p>
                <p className="text-sm text-gray-600"><span className='text-green-500'>Date: </span>{new Date(event.date).toLocaleDateString()}</p>
<<<<<<< HEAD
                <div className="flex justify-between items-center mt-4">
=======
                <div className="flex justify-center mt-4">
>>>>>>> d7d7588074994b7c7aa7dc1cee7c00a47ca67dd9
                  {responses[event._id] ? (
                    <p className="text-lg font-medium text-gray-800">{responses[event._id] === 'attend' ? 'You are attending this event.' : 'You are Not Attending this event.'}</p>
                  ) : (
                    <>
                      <button
                        onClick={() => handleResponse(event._id, 'attend')}
                        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 mx-2"
                      >
                        Attending
                      </button>
                      <button
                        onClick={() => handleResponse(event._id, 'busy')}
                        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 mx-2"
                      >
                        Not Attending
                      </button>
                    </>
                  )}
<<<<<<< HEAD
                  <div className="flex items-center">
                    <p className="text-lg font-medium text-gray-800 mr-2">Number of Attendees:</p>
                    <span className="text-lg font-bold text-gray-800">{event.incrementingValue || 0}</span>
                  </div>
=======
>>>>>>> d7d7588074994b7c7aa7dc1cee7c00a47ca67dd9
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
