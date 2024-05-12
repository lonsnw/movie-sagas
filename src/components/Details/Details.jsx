import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import MovieCreationTwoToneIcon from '@mui/icons-material/MovieCreationTwoTone';

function Details(){

    const dispatch = useDispatch();
    const history = useHistory();
    const details = useSelector(store => store.details);

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_DETAILS' });
    //     }, []);

    const handleClick = () => {
        history.push('/');
  }

    return(
        <div data-testid="movieDetails">
            {details.map(movie => {
                return (
            <Box>
                <Card>
                    <CardContent>
                        <Typography variant="h3">{movie.title}</Typography>
                    </CardContent>
                    <CardMedia
                            component="img"
                            alt={movie.title}
                            height="300"
                            image={movie.poster} />
                </Card>
                
                <Typography>{movie.description}</Typography>
            </Box>
        );
    })}
            <Button 
                onClick={() => {handleClick()}} 
                size="large"
                color="secondary" 
                data-testid="toList"
                startIcon={<MovieCreationTwoToneIcon />}>
                Back to list
            </Button>

        </div>
    )
}

export default Details;