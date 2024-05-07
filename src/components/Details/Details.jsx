import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

function Details(){

    const history = useHistory();

    const handleClick = () => {
        history.push('/');
  }

    return(
        <div data-testid="movieDetails">
            <Button 
                onClick={() => {handleClick()}} 
                variant="contained" 
                color="secondary" 
                data-testid="toList">
                    Button</Button>

        </div>
    )
}

export default Details;