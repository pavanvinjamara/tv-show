import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';

function ShowDetails() {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data));
  }, [id]);

  const handleBookTicket = () => {
    // Implement ticket booking logic here
    // Store the movie details in local/session storage
  };

  const removeTags = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.innerText;
  };

  if (!show) {
    return <div className="container">Loading...</div>;
  }

  const summary = removeTags(show.summary);

  return (
    <div className={`container fade-in`}>
      <h1>{show.name}</h1>
      <p>{summary}</p>
      <button className="button" onClick={handleBookTicket}>
        Book Ticket
      </button>
    </div>
  );
}

export default ShowDetails;