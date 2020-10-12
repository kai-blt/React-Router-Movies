import React from 'react';


export default function MovieCard(props) {
  const { title, director, metascore, stars } = props;
  return (
    <>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>

      { /* If there are stars to list, display h3*/ }
      { stars ? <h3>Actors</h3> : null }

      { /* If there are stars to list, grab info and pull into div */ }
      { stars 
        ? stars.map(star => 
        <>
        <div key={star} className="movie-star">
          {star}
        </div>
        </>) 
        : null }
    </>
  );
}
