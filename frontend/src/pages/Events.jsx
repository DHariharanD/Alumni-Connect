import React, { useEffect, useState } from 'react';
import API from '../services/api';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await API.get('/events');
      setEvents(res.data);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <center><h1 className='text-4xl font-bold text-green-700 p-7'>Ongoing Event's</h1></center>
      <div className='p-8'>
        <ul>
          {events.map((event) => (
            <li key={event._id} className="bg-gray-50 p-4 rounded-lg shadow-sm mb-7">
              <h3 className="text-lg font-semibold text-gray-800"><span className='text-blue-600'>Event: </span>{event.title}</h3>
              <p className="text-sm text-gray-600 break-words"><span className='text-blue-600'>Details: </span>{event.description}</p>
              <p className="text-sm text-gray-600"><span className='text-blue-600'>Date: </span>{new Date(event.date).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Events;
