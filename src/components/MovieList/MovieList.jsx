import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import { Typography, Grid, Card, Stack, CardContent, CardMedia, Box } from '@mui/material';
import CollectionDetails from '../CollectionDetails/CollectionDetails';'../CollectionDetails/CollectionDetails'

function MovieList() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  return (
    <Box justifyContent="space-evenly" alignItems="center">
      <CollectionDetails />
      <Grid>
        <section className="movies">
          {movies.map(movie => {
            return (
              <Card data-testid='movieItem' key={movie.id} sx={{ bgcolor: "secondary", padding: 3, width: 200 }}>
                <Stack direction="column" justifyContent="space-evenly" alignItems="center" spacing={2}>
                  <CardContent>
                    <Typography variant="h6">{movie.title}</Typography>
                  </CardContent>
                  <CardMedia>
                    <img src={movie.poster} alt={movie.title}/>
                  </CardMedia>
                </Stack>
              </Card>
            );
          })}
        </section>
      </Grid>
  </Box>
  );
}

export default MovieList;
