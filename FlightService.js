import axios from 'axios';

const API_KEY = '5f36a5457fmsh8a72366442bd9a4p11561fjsnrf3da6dcbda86';
const API_URL = 'https://sky-scrapper.p.rapidapi.com/api/v1/flights/getNearByAirports';
const headers = {
  'X-RapidAPI-Key': '5f36a5457fmsh8a72366442bd9a4p11561fjsnrf3da6dcbda86', 
  'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
};


export const getNearbyAirports = async (lat, lon) => {
  try {
    const response = await axios.get(API_URL, {
      headers: headers,
      params: { lat, lon },
    });
    return response.data;  
  } catch (error) {
    console.error('Error fetching nearby airports:', error);
    throw error;
  }
};