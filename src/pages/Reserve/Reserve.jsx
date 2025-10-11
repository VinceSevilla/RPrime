import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../../client';
import images from '../../assets/images/images';

const Reserve = () => {
  const navigate = useNavigate();
  const { restaurantName } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '',
    date: '',
    time: '',
    requests: '',
  });
  const [reservationConfirmed, setReservationConfirmed] = useState(false);

  const decodedRestaurantName = restaurantName ? decodeURIComponent(restaurantName) : '';

  const restaurantVisuals = {
    'Skyline Dining': images.restaurant1,
    'Sea Breeze Café': images.restaurant2,
    'Golden Dragon': images.restaurant3,
    'Steakhouse Prime': images.restaurant4,
    'Garden Bistro': images.restaurant5,
    'Dessert Haven': images.restaurant6,
  };

  const selectedRestaurantImage = restaurantVisuals[decodedRestaurantName] || images.food1;

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
    <div className="min-h-screen w-full bg-gradient-to-br from-[#f4f5fb] via-white to-[#eef2f6] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl rounded-3xl border border-slate-200/60 bg-white/85 backdrop-blur shadow-xl shadow-slate-200">
        {reservationConfirmed ? (
          <div className="flex flex-col items-center gap-6 px-8 py-16 text-center">
            <div className="rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
              Confirmed
            </div>
            <h2 className="text-3xl font-bold text-slate-900">
              Reservation confirmed {decodedRestaurantName ? `for ${decodedRestaurantName}` : ''}
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
                src={selectedRestaurantImage}
                alt={decodedRestaurantName || 'Selected restaurant'}
                className="h-80 w-full object-cover md:h-[32rem]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#2c3e50]/15 via-transparent to-[#2c3e50]/40" />
            </figure>

            <div className="space-y-8">
              <header className="space-y-3 text-center md:text-left">
                <span className="inline-flex items-center justify-center rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#2c3e50]">
                  Reservation
                </span>
                <h1 className="text-3xl font-bold text-slate-900">
                  Reserve your table {decodedRestaurantName ? `at ${decodedRestaurantName}` : ''}
                </h1>
                <p className="text-sm text-slate-500">
                  Share a few details and we&apos;ll secure the perfect setting for your occasion.
                </p>
              </header>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600" htmlFor="name">
                        Guest name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-[#2c3e50] focus:outline-none focus:ring-4 focus:ring-[#2c3e50]/15"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600" htmlFor="email">
                        Email address
                      </label>
                      <input
                        id="email"
                        type="email"
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
                      <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600" htmlFor="guests">
                        Guests
                      </label>
                      <input
                        id="guests"
                        type="number"
                        name="guests"
                        min="1"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-[#2c3e50] focus:outline-none focus:ring-4 focus:ring-[#2c3e50]/15"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600" htmlFor="date">
                        Reservation date
                      </label>
                      <input
                        id="date"
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full cursor-pointer rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-[#2c3e50] focus:outline-none focus:ring-4 focus:ring-[#2c3e50]/20 hover:border-[#2c3e50]"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600" htmlFor="time">
                        Reservation time
                      </label>
                      <input
                        id="time"
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full cursor-pointer rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-[#2c3e50] focus:outline-none focus:ring-4 focus:ring-[#2c3e50]/20 hover:border-[#2c3e50]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600" htmlFor="requests">
                        Special requests
                      </label>
                      <textarea
                        id="requests"
                        name="requests"
                        value={formData.requests}
                        onChange={handleChange}
                        rows="3"
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm transition focus:border-[#2c3e50] focus:outline-none focus:ring-4 focus:ring-[#2c3e50]/15"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-[#2c3e50] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-[#2c3e50]/30 transition hover:bg-[#1b2733]"
                >
                  Confirm reservation
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Reserve;
