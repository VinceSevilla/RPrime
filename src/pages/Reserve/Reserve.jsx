import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../client';

const Reserve = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '',
    date: '',
    time: '',
    requests: '',
  });
  const [reservationConfirmed, setReservationConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from('reservations')
        .insert([formData]);

      if (error) throw error;
      setReservationConfirmed(true);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleReturnHome = () => navigate('/homepage');

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#f0f8ff] to-[#e0ffff] p-5">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 flex flex-col">
        {reservationConfirmed ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#4A90E2] mb-5">Reservation Confirmed!</h2>
            <p className="text-lg text-gray-800 mb-5">Thank you for reserving. We look forward to serving you!</p>
            <button
              onClick={handleReturnHome}
              className="px-5 py-3 bg-[#4A90E2] text-white rounded-lg text-lg font-semibold hover:bg-[#3581d2] transition-colors"
            >
              Return to Homepage
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl md:text-3xl font-bold text-[#4A90E2] text-center mb-6">Reserve Your Table</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {[
                { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Enter your full name' },
                { label: 'Email Address', name: 'email', type: 'email', placeholder: 'Enter your email' },
                { label: 'Number of Guests', name: 'guests', type: 'number', placeholder: '1', min: 1 },
                { label: 'Reservation Date', name: 'date', type: 'date' },
                { label: 'Reservation Time', name: 'time', type: 'time' },
              ].map((field) => (
                <div key={field.name} className="flex flex-col">
                  <label className="text-gray-800 font-semibold mb-1">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    min={field.min}
                    required
                    className="p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#4A90E2] focus:ring-1 focus:ring-[#4A90E2] transition"
                  />
                </div>
              ))}

              <div className="flex flex-col">
                <label className="text-gray-800 font-semibold mb-1">Special Requests</label>
                <textarea
                  name="requests"
                  value={formData.requests}
                  onChange={handleChange}
                  placeholder="Any special requests?"
                  rows="3"
                  className="p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:border-[#4A90E2] focus:ring-1 focus:ring-[#4A90E2] transition"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-br from-[#4A90E2] to-[#5c9ee1] text-white font-bold text-lg rounded-lg hover:from-[#3581d2] hover:to-[#5c9ee1] transition-all"
              >
                Confirm Reservation
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Reserve;
