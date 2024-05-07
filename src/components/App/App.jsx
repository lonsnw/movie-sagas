import { Route, HashRouter as Router } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import Header from '../Header/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#634cb3',
      },
      secondary: {
        main: '#964cb3',
      },
      background: {
        default: '#dfdbef',
        paper: '#fcfbfd',
      },
    },
    typography: {
      h1: {
        fontSize: '4rem',
        fontWeight: 600,
        letterSpacing: '-0.04em',
        fontFamily: "'Lato', sans-serif",
      },
      fontFamily: "'Lato', sans-serif",
      button: {
        fontWeight: 600,
      },
    },
    spacing: (factor) => `${0.5 * factor}rem`,
    shape: {
      borderRadius: 4,
    },
    props: {
      MuiList: {
        dense: true,
      },
      MuiMenuItem: {
        dense: true,
      },
      MuiTable: {
        size: 'small',
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        
        <Router>        
          <Route path="/" exact>
            <MovieList />
          </Route>
          
          {/* Details page */}

          {/* Add Movie page */}
          
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
