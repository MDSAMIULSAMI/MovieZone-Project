import React, { useState, useEffect } from 'react';

const TestRESTAPI = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/api/movies/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        // console.log(data);
        setMovies(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='bg-white'>
      <h1>Movies</h1>
      {movies.map(movie => (
        <div key={movie.id}>
          <h2>{movie.name}</h2>
          <p><strong>Genres:</strong> {movie.genres}</p>
          <p><strong>Rating:</strong> {movie.rating}</p>
          <p><strong>Duration:</strong> {movie.duration}</p>
          <h3>Episodes</h3>
          <ul>
            {movie.episodes.map(episode => (
              <li key={episode.id}>
                <strong>{episode.episode_name}</strong>
                <video src={episode.video_url} controls>
                  Your browser does not support HTML video.
                </video>
              </li>
            ))}
          </ul>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TestRESTAPI;
