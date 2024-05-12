import { useSelector } from 'react-redux';
import { Box, Button, Card, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import MovieCreationTwoToneIcon from '@mui/icons-material/MovieCreationTwoTone';
import './Details.css';

function Details(){

    const history = useHistory();
    const details = useSelector(store => store.details);
    const genres = useSelector(store => store.genres)

    const handleClick = () => {
        history.push('/');
  }

    console.log('genres:', genres);

    return(
        <div className="page" data-testid="movieDetails">
            <Box className="deets" >
            {details.map(movie => {
                return (
                <div key={movie.id} className="deets" >
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                            component="img"
                            alt={movie.title}
                            height="500"
                            image={movie.poster} />
                    <CardContent>
                        <Typography variant="h3">{movie.title}</Typography>
                    </CardContent>
                </Card>
                <Typography>{movie.description}</Typography>
                </div>
            );
        })}
            {genres.map(genre => {
                return (
                    <div>
                        <Chip
                            key={genre.id}
                            label={genre.name} />
                    </div>
                )
            })}
            </Box>
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