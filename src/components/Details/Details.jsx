import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import MovieCreationTwoToneIcon from '@mui/icons-material/MovieCreationTwoTone';

function Details(){

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS' });
        }, []);

    const handleClick = () => {
        history.push('/');
  }

    return(
        <div data-testid="movieDetails">
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