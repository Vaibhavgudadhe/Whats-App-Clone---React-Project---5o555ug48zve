import React, { useState } from 'react';

const Search = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleDepartureDateChange = (event) => {
    setDepartureDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement flight search logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="origin">Origin:</label>
      <input type="text" id="origin" value={origin} onChange={handleOriginChange} />

      <label htmlFor="destination">Destination:</label>
      <input type="text" id="destination" value={destination} onChange={handleDestinationChange} />

      <label htmlFor="departure-date">Departure date:</label>
      <input type="date" id="departure-date" value={departureDate} onChange={handleDepartureDateChange} />

      <button type="submit">Search flights</button>
    </form>
  );
};

export default Search;
