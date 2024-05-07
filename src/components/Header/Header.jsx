import { Typography, Box, AppBar, Toolbar, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

function Header() {

    const history = useHistory();

    const handleClick = () => {
        history.push('/');
  }

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ padding: 1 }} onClick={() => {handleClick()}}>
          <Toolbar>
            <Typography sx={{ flexGrow: 1 }} variant="h1" gutterBottom >
              Movies Database
            </Typography>
            <Button variant="contained" color="secondary">Button</Button>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default Header;