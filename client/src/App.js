import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom'
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          //On load, set the Movie List data into movieList state
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  
  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once

    /*Remove duplicates by creating a new set. Sets don't allow duplicates!
    Spread the current saved array and append the clicked on id. Convert
    the set back into an array for later use!*/
    
    setSaved(Array.from(new Set([...saved, Number(id)])));
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <div>
        <Switch>
          <Route path='/movies/:id'>
            <Movie saveMovie={addToSavedList}/>
          </Route>
          
          <Route path='/'>
            <MovieList movies={movieList} />
          </Route> 
        </Switch>
      </div>
    </div>
  );
}
