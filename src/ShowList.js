import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  const removeTags = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.innerText;
  };

  return (
    <div className="container">
      <h1 className="fade-in">TV Shows</h1>
      {shows.map((show) => (
        <div key={show.show.id} className="fade-in">
          <h2>{show.show.name}</h2>
          <p>{removeTags(show.show.summary)}</p>
          <Link to={`/show/${show.show.id}`}>
            <button className="button">View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ShowList;







