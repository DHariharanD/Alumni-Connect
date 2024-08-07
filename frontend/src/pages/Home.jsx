import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

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
    try {
      await API.post('/events/respond', { eventId, userId: userData._id, response });
      setResponses(prevResponses => ({
        ...prevResponses,
        [eventId]: response
      }));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        {/* Existing UI elements remain unchanged */}

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Events:</h2>
          <ul className="space-y-4">
            {events.map((event) => (
              <li key={event._id} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800"><span className='text-green-500'>Event: </span>{event.title}</h3>
                <p className="text-sm text-gray-600 break-words"><span className='text-green-500'>Details: </span>{event.description}</p>
                <p className="text-sm text-gray-600"><span className='text-green-500'>Date: </span>{new Date(event.date).toLocaleDateString()}</p>
                <div className="flex justify-center mt-4">
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
