import React from "react";
import FlightList from "./Components/FlightList";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Google Flights Clone</h1>
      <FlightList />
      <Footer />
    </div>
  );
}

export default App;
