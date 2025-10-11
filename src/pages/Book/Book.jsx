import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../../client';
import images from '../../assets/images/images';

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

  const decodedRoomName = roomName ? decodeURIComponent(roomName) : '';

  const roomVisuals = {
    'Deluxe Room': images.room1,
    'Premier Room': images.Premier,
    'Presidential Suite': images.Presidential,
    'Premier Deluxe': images.Deluxe,
    'Family Suite': images.Sea,
    'Honeymoon Suite': images.Garden,
  };

  const selectedRoomImage = roomVisuals[decodedRoomName] || images.hotel1;

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
          room_name: decodedRoomName || roomName,
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
    <div className="min-h-screen w-full bg-gradient-to-br from-[#f4f5fb] via-white to-[#eef2f6] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl rounded-3xl border border-slate-200/60 bg-white/85 backdrop-blur shadow-xl shadow-slate-200">
        {bookingConfirmed ? (
          <div className="flex flex-col items-center gap-6 px-8 py-16 text-center">
            <div className="rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Confirmed
            </div>
            <h2 className="text-3xl font-bold text-slate-900">
              Stay confirmed at <span className="text-[#2c3e50]">{decodedRoomName || roomName}</span>
            </h2>
            <button
              onClick={handleReturnHome}
              className="inline-flex items-center justify-center rounded-2xl bg-[#2c3e50] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2c3e50]/30 transition hover:bg-[#1b2733]"
            >
              Return to homepage
            </button>
          </div>
        ) : (
          <div className="grid gap-10 px-6 py-10 items-center md:grid-cols-2 md:px-12 md:py-14">
            <figure className="relative overflow-hidden rounded-3xl bg-[#2c3e50]/5 shadow-lg ring-1 ring-[#2c3e50]/10">
              <img
                src={selectedRoomImage}
                alt={decodedRoomName || 'Selected room'}
                className="h-80 w-full object-cover md:h-[32rem]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#2c3e50]/15 via-transparent to-[#2c3e50]/40" />
            </figure>

            <div className="space-y-8">
              <header className="space-y-3 text-center md:text-left">
                <span className="inline-flex items-center justify-center rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#2c3e50]">
                  Booking
                </span>
                <h1 className="text-3xl font-bold text-slate-900">Reserve your stay at {decodedRoomName || roomName}</h1>
                <p className="text-sm text-slate-500">
                  Complete the details below and we&apos;ll lock in your dates instantly.
                </p>
              </header>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                        Guest name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-[#2c3e50] focus:outline-none focus:ring-4 focus:ring-[#2c3e50]/15"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-[#2c3e50] focus:outline-none focus:ring-4 focus:ring-[#2c3e50]/15"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="checkIn" className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                        Check-in date
                      </label>
                      <input
                        type="date"
                        id="checkIn"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        required
                        className="w-full cursor-pointer rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-[#2c3e50] focus:outline-none focus:ring-4 focus:ring-[#2c3e50]/20 hover:border-[#2c3e50]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="checkOut" className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                        Check-out date
                      </label>
                      <input
                        type="date"
                        id="checkOut"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        required
                        className="w-full cursor-pointer rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-[#2c3e50] focus:outline-none focus:ring-4 focus:ring-[#2c3e50]/20 hover:border-[#2c3e50]"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-[#2c3e50] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-[#2c3e50]/30 transition hover:bg-[#1b2733]"
                >
                  Confirm booking
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Book;
