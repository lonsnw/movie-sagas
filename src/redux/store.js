import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAllMovies() {
  try {
    // Get the movies:
    const moviesResponse = yield axios.get('/api/movies');
    // Set the value of the movies reducer:
    yield put({
      type: 'SET_MOVIES',
      payload: moviesResponse.data
    });
  } catch (error) {
    console.log('fetchAllMovies error:', error);
  }
}

function* fetchDetails(action) {
  try {
    // Get the details:
    const movieId = action.payload;
    console.log(movieId);
    const detailsResponse = yield axios.get(`/api/movies/${movieId}`);
    yield put({ type: 'SET_DETAILS', payload: detailsResponse.data })
  } catch (error) {
    console.log('fetchDetails error', error);
  }
}

function* fetchAllGenres(action) {
  try {
    // Get the genres:
    const movieId = action.payload;
    const genresResponse = yield axios.get(`/api/genres/${movieId}`);
    // Set the value of the genres reducer:
    yield put({
      type: 'SET_GENRES',
      payload: genresResponse.data
    });
  } catch (error) {
    console.log('fetchAllGenres error:', error);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
}

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
}

const details = (state = [], action) => {
  switch (action.type) {
    case 'SET_DETAILS':
      return action.payload;
    default:
      return state;
  }
}

// Adding rootSaga to listen for saga actions
function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchAllMovies);
  yield takeEvery('FETCH_DETAILS', fetchDetails);
  yield takeEvery('FETCH_GENRES', fetchAllGenres);
}

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    details,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;
