import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import images from "../../assets/images/images";

const restaurantData = [
  {
    name: "Skyline Dining",
    img: images.restaurant1,
    schedule: "Mon-Sun: 11:00 AM - 11:00 PM",
    priceRange: "$$$",
    dressCode: "Smart Casual",
    diningType: "Fine Dining",
    location: "15th Floor, RPrime, Downtown",
  },
  {
    name: "Sea Breeze Café",
    img: images.restaurant2,
    schedule: "Mon-Sun: 8:00 AM - 10:00 PM",
    priceRange: "$$",
    dressCode: "Casual",
    diningType: "Casual Dining",
    location: "Beachfront, RPrime",
  },
  {
    name: "Golden Dragon",
    img: images.restaurant3,
    schedule: "Mon-Sun: 12:00 PM - 10:00 PM",
    priceRange: "$$$",
    dressCode: "Smart Casual",
    diningType: "Asian Cuisine",
    location: "2nd Floor, RPrime",
  },
  {
    name: "Steakhouse Prime",
    img: images.restaurant4,
    schedule: "Mon-Sun: 11:00 AM - 12:00 AM",
    priceRange: "$$$$",
    dressCode: "Formal",
    diningType: "Steakhouse",
    location: "Lobby Level, RPrime",
  },
  {
    name: "Garden Bistro",
    img: images.restaurant5,
    schedule: "Mon-Sun: 9:00 AM - 9:00 PM",
    priceRange: "$$",
    dressCode: "Casual",
    diningType: "Bistro / Farm-to-Table",
    location: "Rooftop Garden, RPrime",
  },
  {
    name: "Dessert Haven",
    img: images.restaurant6,
    schedule: "Mon-Sun: 10:00 AM - 10:00 PM",
    priceRange: "$",
    dressCode: "Casual",
    diningType: "Café / Dessert",
    location: "Ground Floor, RPrime",
  },
];

const RestaurantDetails = () => {
  const { restaurantName } = useParams();
  const navigate = useNavigate();

  const restaurant = restaurantData.find(
    (rest) => rest.name === decodeURIComponent(restaurantName)
  );

  if (!restaurant) return <p className="text-center mt-10">Restaurant not found</p>;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex justify-center items-center p-5">
      {/* Back Button */}
      <button
        onClick={() => navigate("/restaurants")}
        className="absolute top-5 left-5 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        ← Back
      </button>

      {/* Restaurant Card */}
      <div className="max-w-lg w-full bg-white rounded-xl p-8 shadow-lg flex flex-col items-center">
        <img
          src={restaurant.img}
          alt={restaurant.name}
          className="w-full h-72 object-cover rounded-xl mb-5"
        />
        <h2 className="text-2xl font-bold mb-5">{restaurant.name}</h2>

        <div className="w-full text-left mb-5 space-y-2 text-gray-700">
          <p>
            <span className="font-semibold">Schedule:</span> {restaurant.schedule}
          </p>
          <p>
            <span className="font-semibold">Price Range:</span> {restaurant.priceRange}
          </p>
          <p>
            <span className="font-semibold">Dress Code:</span> {restaurant.dressCode}
          </p>
          <p>
            <span className="font-semibold">Dining Type:</span> {restaurant.diningType}
          </p>
          <p>
            <span className="font-semibold">Location:</span> {restaurant.location}
          </p>
        </div>

        {/* Reserve Button */}
        <button
          onClick={() =>
            navigate(`/reserve/${encodeURIComponent(restaurant.name)}`)
          }
          className="mt-3 px-6 py-3 text-lg font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Make Reservation
        </button>
      </div>
    </div>
  );
};

export default RestaurantDetails;
