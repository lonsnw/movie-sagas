import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import { Typography, Grid, Card, Stack, CardContent, CardMedia, Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import CollectionDetails from '../CollectionDetails/CollectionDetails';'../CollectionDetails/CollectionDetails'

function MovieList() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
  }));

  return (
    <Container maxWidth="xl" alignItems="center" justifyContent="center" >
        <CollectionDetails />
        {/* Cannot for the life of me get these cards to center */}
        <Grid container 
          justifyContent="space-around" 
          alignItems="center">
            <Item className="movies">
              {movies.map(movie => {
                return (
                  <Card 
                    data-testid='movieItem' 
                    key={movie.id} 
                    sx={{ bgcolor: "secondary", padding: 3, width: 240 }}>
                      <Stack 
                        direction="column" 
                        justifyContent="space-evenly" 
                        alignItems="center" 
                        spacing={2}>
                          <CardContent>
                            <Typography variant="h6">{movie.title}</Typography>
                          </CardContent>
                          <CardMedia
                            component="img"
                            alt={movie.title}
                            height="300"
                            image={movie.poster} 
                            data-testid="toDetails"/>
                      </Stack>
                  </Card>
                );
              })}
            </Item>
        </Grid>
  </Container>
  );
}

export default MovieList;
