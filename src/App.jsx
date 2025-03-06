import {useState, useEffect} from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

console.log(import.meta.env.VITE_OMDB_API_KEY)

const randomMovieList = [
  "Bad Boys", 
  "Godfather", 
  "The Silence of the Lambs", 
  "Meet the Fockers", 
  "The Best Man Holiday", 
  "A Quiet Place:Day One", 
  "New Jack City", 
  "Salt", 
  "The Book of Eli"
];

export default function App() {
  
  
  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async (searchTerm) => {
    try {
      // Make fetch request and store the response
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&t=${searchTerm}`
      );
      // Parse JSON response into a JavaScript object
      const data = await response.json();
      // Set the Movie state to the received data
      setMovie(data);
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  };

  // Get a random movie on initial load
  const grabRandomMovie = randomMovieList[Math.floor(Math.random() * randomMovieList.length)];
  
  useEffect(() => {
    getMovie(grabRandomMovie);
  }, []);

  return (
    <div className="App" style={{
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: '20px',
      backgroundColor: '#f4f4f4'
    }}>
      <Form moviesearch={getMovie} />
      <div style={{
        border: '4px solid #3498db', // Blue border
        borderRadius: '10px',
        padding: '15px',
        marginTop: '20px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <MovieDisplay movie={movie} />
      </div>
    </div>
  );
}
