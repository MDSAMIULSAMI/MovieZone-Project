import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Styles/fullmoviepage.css';

const FullMovieStream = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [selectedEpisode, setSelectedEpisode] = useState("");

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
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const { id } = useParams();
  const selectedMovie = movies.find(movie => movie.id === parseInt(id, 10));
  // console.log("selectedMovie ",selectedMovie)

  useEffect(() => {
    if (selectedMovie && selectedMovie.episodes.length > 0) {
      setSelectedEpisode(selectedMovie.episodes[0]);
    }
  }, [selectedMovie]);

  const handleEpisodeClick = (episode) => {
    setSelectedEpisode(episode);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      setComments(prevComments => [...prevComments, { user: 'ABCD', comment: newComment }]);
      setNewComment('');
    }
  };

  return (
    <div>
      {loading ? (
        <p className='bg-white'>Loading...</p>
      ) : selectedMovie ? (
        <div className='row mx-4'>
          <div className='col my-4 d-inline'>
            <div>
              <video src={selectedEpisode.video_url} poster={selectedMovie.thumbnail} controls controlsList='nodownload'>
                Your browser does not support HTML video.
              </video>
            </div>
            <div className='row'>
              <div className='col'>
                <div className='d-flex'>
                  <h1 className='text-white'>{selectedMovie.name}</h1>
                  <button type="button" className="btn btn-outline-warning m-2" disabled>1000 Views </button>
                </div>
                <div className='d-flex'>
                  <img className='thumbnail' src={selectedMovie.thumbnail} alt={selectedMovie.name} />
                  <div className="col card card-3 mx-2">
                    <div className="card-body card-body-2">
                      <h5 className="card-title">{selectedMovie.name}</h5>
                      <p className="card-text">{selectedMovie.info}</p>
                    </div>
                  </div>
                  <div className="col card card-4 mx-2">
                    <div className="card-body">
                      <div className='icons'>
                        <img className='m-2' width="25" height="25" src={selectedMovie.quality} alt="r--v1" />
                        <img className='m-2' width="25" height="25" src={selectedMovie.contentType} alt="r--v1" />
                      </div>
                      <div className='card card-5'>
                        <div className='card-body card-body-5'>
                          <p>Type: {selectedMovie.watch_type}</p>
                          <p>Country: {selectedMovie.country}</p>
                          <p>Genres: {selectedMovie.genres}</p>
                          <p>Actor: {selectedMovie.actor}</p>
                          <p>Rating: {selectedMovie.rating}</p>
                          <p>Aired Date: {selectedMovie.date_aired}</p>
                          <p>Episodes: {selectedMovie.episode}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card card-2 col list-group my-4 p-2">
            {selectedMovie.episodes.map(episode => (
              <button
                key={episode.episode_id}
                className={`list-group-item ${episode === selectedEpisode ? 'active' : ''}`}
                onClick={() => handleEpisodeClick(episode)}
              >
                {episode.episode_name}
              </button>
            ))}
          </div>
          <div className='text-white'>
            <h2>Comments</h2>
            <div className='card m-4'>
              <div className="form-floating d-flex m-2" data-bs-theme="dark">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                ></textarea>
                <label className='text-white' htmlFor="floatingTextarea2">Enter Comment</label>
                <button type="button" className="btn btn-info m-2" onClick={handleCommentSubmit}>
                  Submit
                </button>
              </div>
            </div>

            <div>
              {comments.map((comment, index) => (
                <div key={index} className='card m-2'>
                  <div className='card-body'>
                    <h6 className='card-title'>{comment.user}</h6>
                    <p className='card-text'>{comment.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Movie Not Found</h1>
        </div>
      )}
    </div>
  );
};

export default FullMovieStream;
