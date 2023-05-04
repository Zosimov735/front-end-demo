import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const baseImgUrl = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="card">
      <div className="card-image">
        {movie.posterPath && (
          <img src={`${baseImgUrl}${movie.posterPath}`} alt={`Poster for ${movie.title}`} />
        )}
      </div>
      <div className="card-content">
        <div className="title">{movie.title}</div>
        <div className="price">${movie.price}</div>
      </div>
    </div>
  );
};

export default MovieCard;
