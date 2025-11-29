import React from 'react';
import { Homepage, Rooms, Restaurants, Book, RestaurantDetails, Reserve, Events } from './pages'; 
import { Routes, Route } from 'react-router-dom';
import Analytics from './Analytics';

const App = () => {

  return (
    <div>
      <Analytics />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/restaurants" element={<Restaurants />} />
        {/* Add the route for the booking page */}
        <Route path="/book/:roomName" element={<Book />} />
        <Route path="/restaurants/:restaurantName" element={<RestaurantDetails />} /> {/* NEW */}
        {/* Add the route for the reservation page */}
        <Route path="/reserve/:restaurantName" element={<Reserve />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
  );
};

export default App;
