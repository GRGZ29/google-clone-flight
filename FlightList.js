import React, { useState, useEffect } from 'react';

const FlightList = () => {
  const [flights, setFlights] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  useEffect(() => {
    
    fetch('https://sky-scrapper.p.rapidapi.com/api/v1/flights/getNearByAirports', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
        'X-RapidAPI-Key': '5f36a5457fmsh8a72366442bd9a4p11561fjsnrf3da6dcbda86', 
      },
    })
      .then(response => response.json()) 
      .then(data => {
        console.log(data); 
        if (data && data.flights) {
          setFlights(data.flights); 
        } else {
          setError('No flights data available');
        }
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching flight data:', error);
        setError('Failed to fetch flight data');
        setLoading(false); 
      });
  }, []); 
  if (loading) {
    return <p>Loading flights...</p>; 
  }

  if (error) {
    return <p>{error}</p>; 
  }

  return (
    <div>
      <h2>Available Flights</h2>
      {flights.length > 0 ? (
        <ul>
          {flights.map(flight => (
            <li key={flight.id}>{flight.name}</li> 
          ))}
        </ul>
      ) : (
        <p>No flights available</p> 
      )}
    </div>
  );
};

export default FlightList;
