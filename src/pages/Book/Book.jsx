import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../../client';

const Book = () => {
  const { roomName } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  useEffect(() => {
    console.log('Room Name:', roomName);
  }, [roomName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from('bookings').insert([
        {
          name: formData.name,
          email: formData.email,
          room_name: roomName,
          check_in: formData.checkIn,
          check_out: formData.checkOut,
        },
      ]);

      if (error) throw error;
      setBookingConfirmed(true);
    } catch (error) {
      alert('There was an error with your booking. Please try again later.');
    }
  };

  const handleReturnHome = () => {
    navigate('/homepage');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-5">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-8 flex flex-col justify-center transition-all">
        {bookingConfirmed ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-500 mb-5">Booking Confirmed!</h2>
            <p className="text-lg text-gray-700 mb-5">
              Thank you for booking with us. Your stay at the <span className="font-semibold">{roomName}</span> is confirmed.
            </p>
            <button
              onClick={handleReturnHome}
              className="px-6 py-3 text-lg font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Return to Homepage
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-center text-blue-500 mb-6">
              Book Your Stay at {roomName}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="px-4 py-3 text-base border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-700 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className="px-4 py-3 text-base border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="checkIn" className="text-gray-700 font-semibold mb-2">
                  Check-in Date
                </label>
                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 text-base border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="checkOut" className="text-gray-700 font-semibold mb-2">
                  Check-out Date
                </label>
                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 text-base border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-lg font-bold text-white bg-gradient-to-br from-blue-500 to-blue-400 rounded-lg hover:from-blue-600 hover:to-blue-500 transition-all"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Book;
