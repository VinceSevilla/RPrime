import React, { useState, useEffect } from 'react';
import { SignUp, Login, Homepage, Rooms, Restaurants, Book, RestaurantDetails, Reserve } from './pages'; // Import Book
import { Routes, Route } from 'react-router-dom';
import { supabase } from './client';

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error('Error fetching session:', error.message);
      } else {
        setToken(data.session);
      }
    };
    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setToken(session);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login setToken={setToken} />} />
        <Route path="/homepage" element={token ? <Homepage token={token} /> : <Login setToken={setToken} />} />
        <Route path="/rooms" element={token ? <Rooms token={token} /> : <Login setToken={setToken} />} />
        <Route path="/restaurants" element={token ? <Restaurants /> : <Login setToken={setToken} />} />
        {/* Add the route for the booking page */}
        <Route path="/book/:roomName" element={token ? <Book /> : <Login setToken={setToken} />} />
        <Route path="/restaurants/:restaurantName" element={token ? <RestaurantDetails /> : <Login setToken={setToken} />} /> {/* NEW */}
        {/* Add the route for the reservation page */}
        <Route path="/reserve/:restaurantName" element={<Reserve />} />
      </Routes>
    </div>
  );
};

export default App;
