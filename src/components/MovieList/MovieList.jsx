import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import { Typography, Stack, Card, TextField, Button } from '@mui/material';


function MovieList() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  return (
    <main>
      <section className="movies">
        {movies.map(movie => {
          return (
            <Card data-testid='movieItem' key={movie.id} sx={{ bgcolor: "secondary", padding: 3, width: 200 }}>
              <h3>{movie.title}</h3>
              <img src={movie.poster} alt={movie.title}/>
            </Card>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
