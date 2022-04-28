import React, { useCallback, useEffect, useState } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Profile } from '../Profile/Profile';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { NotFound } from '../NotFound/NotFound';

import { UserProvider } from '../../contexts/User';
import { MoviesProvider } from '../../contexts/Movies';
import { FavouriteMoviesProvider } from '../../contexts/FavouriteMovies';
import { getMovies } from '../../utils/MoviesApi';
import { getMe, getMyMovies } from '../../utils/MainApi';
import ProtectedRoute from '../../utils/ProtectedRoute';

import './App.css';

function App() {
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [movies, setMovies] = useState([]);
  const [favouriteMovies, setFavouriteMovies] = useState([]);
  const [loadingMovies, setLoadingMovies] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    getMe()
      .then((data) => {
        setUser(data);
        setLoggedIn(true);
        if (location.pathname === '/sign-in' || location.pathname === '/sign-up') {
          history.push('/movies');
        }
      })
      .catch(() => {
        setLoggedIn(false);
      })
    
    const localMovies = localStorage.getItem('movies');
    
    if (localMovies) {
      setMovies(JSON.parse(localMovies));
    } else {
      getMovies()
        .then(data => {
            localStorage.setItem('movies', JSON.stringify(data));
            setMovies(data);
        })
    }

    setLoadingMovies(true);

    getMyMovies()
      .then((data) => {
        setFavouriteMovies(data);
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoadingMovies(false)
      })

  }, [history, location.pathname]);

  const onSuccess = useCallback(() => {
    setLoggedIn(true);
    history.push('/movies');
  }, [history]);

  return (
    <UserProvider value={{ user, setUserData: setUser }}>
      <MoviesProvider value={movies}>
        <FavouriteMoviesProvider value={{ favouriteMovies, updateFavouriteMovies: setFavouriteMovies, isLoading: loadingMovies }}>
          <div className="App">
            <Switch>
              <Route path="/" exact>
                <Main />
              </Route>
              <ProtectedRoute path="/movies" isLoggedIn={isLoggedIn}>
                <Movies />
              </ProtectedRoute>
              <ProtectedRoute path="/saved-movies" isLoggedIn={isLoggedIn}>
                <SavedMovies />
              </ProtectedRoute>
              <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
                <Profile />
              </ProtectedRoute>
              <Route path="/sign-up">
                <Register onSuccess={onSuccess} />
              </Route>
              <Route path="/sign-in">
                <Login onSuccess={onSuccess} />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </FavouriteMoviesProvider>
      </MoviesProvider>
    </UserProvider>
  );
}

export default App;
