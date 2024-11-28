import React from 'react';

const FlightCard = ({ flight }) => {
  return (
    <div className="flight-card">
      <h3>{flight.name}</h3>
      <p>{flight.city}, {flight.country}</p>
      <p>Latitude: {flight.latitude}</p>
      <p>Longitude: {flight.longitude}</p>
    </div>
  );
};

export default FlightCard;
