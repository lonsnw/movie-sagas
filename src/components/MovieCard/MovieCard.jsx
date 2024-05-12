import { Typography, Card, Stack, CardContent, CardMedia, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';

function MovieCard() {
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

  // sending movie ID to saga to load when details page opens
    const getID = (movieId) => {
        dispatch({ type: 'FETCH_DETAILS', payload: movieId });
        dispatch({ type: 'FETCH_GENRES', payload: movieId });
        console.log(movieId);
        history.push('/details')
    }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
  }));

    return(
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
                        <CardMedia
                            component="img"
                            alt={movie.title}
                            height="300"
                            image={movie.poster} 
                            data-testid="toDetails"
                            onClick={() => {getID(movie.id)}} />
                        <CardContent>
                            <Typography variant="h6">{movie.title}</Typography>
                        </CardContent>
                  </Stack>
              </Card>
            );
          })}
        </Item>
    )
}

export default MovieCard;