
// export default function MovieDisplay(props) {
//     // The component must return some JSX

//     return <h1>The MovieDisplay Component</h1>;
//   };

// export default function MovieDisplay({ movie }) {
//     return (
//       <>
//         <h1>{movie.Title}</h1>
//         <h2>{movie.Genre}</h2>
//         <img src={movie.Poster} alt={movie.Title} />
//         <h2>{movie.Year}</h2>
//       </>
//     );
//   }
import React from 'react';

export default function MovieDisplay({ movie }) {
  // Loading state
  if (!movie) {
    return <div>Loading...</div>;
  }

  // Error handling for when no movie is found
  if (movie.Response === "False") {
    return <div>No movie found</div>;
  }

  return (
    <div style={{
      color: 'black', 
      maxWidth: '400px',
      textAlign: 'center'
    }}>
      <h2 style={{ 
        color: 'black', 
        fontSize: '24px', 
        marginBottom: '15px' 
      }}>
        {movie.Title}
      </h2>
      
      <img 
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
        alt={movie.Title}
        style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '10px',
          marginBottom: '15px'
        }}
      />
      
      <div style={{ 
        color: 'black',
        lineHeight: '1.6',
        textAlign: 'left'
      }}>
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        
      </div>
    </div>
  );
}