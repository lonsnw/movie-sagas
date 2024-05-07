import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Box } from '@mui/material';
import './MovieList.css';
import MovieCard from '../MovieCard/MovieCard'
import CollectionDetails from '../CollectionDetails/CollectionDetails';'../CollectionDetails/CollectionDetails'

function MovieList() {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  return (
    <div className='movie'>
      <Box sx={{ flexGrow: 1 }}>
          <CollectionDetails />
          <Grid 
            container
            spacing={2}          
            justifyContent="space-evenly"
            alignItems="center">
              <Grid item>
                <MovieCard />
              </Grid>
          </Grid>
    </Box>
  </div>
  );
}

export default MovieList;
