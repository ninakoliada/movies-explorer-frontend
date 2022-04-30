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
import { FavouriteMoviesProvider } from '../../contexts/FavouriteMovies';
import { getMe, getMyMovies, signOut } from '../../utils/MainApi';
import ProtectedRoute from '../../utils/ProtectedRoute';

import './App.css';
import { Preloader } from '../Preloader/Preloader';

function App() {
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [favouriteMovies, setFavouriteMovies] = useState([]);
  const [loadingMovies, setLoadingMovies] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    getMe()
      .then((data) => {
        setUser(data);
        setLoggedIn(true);
        if (location.pathname === '/sign-in' || location.pathname === '/sign-up') {
          setAppLoading()
          history.push('/movies');
        }

      })
      .catch(() => {
        setLoggedIn(false);
      })
      .finally(() => {
        setAppLoading(false);
      })
  }, [history, location.pathname]);

  useEffect(() => {
    if (!isLoggedIn) {
      return;
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
  }, [isLoggedIn])

  
  const onSuccess = useCallback(() => {
    setLoggedIn(true);
    history.push('/movies');
  }, [history]);

  const onSignout = useCallback(() => {
    signOut().then(() => {
      setLoggedIn(false);
      setUser(null);
      history.push('/');
      localStorage.clear('movies');
      localStorage.clear('searchMyMovies');
      localStorage.clear('searchMovies');
    });
  }, [history]);

  if (appLoading) {
    return (
      <div className='App__preloader'>
        <Preloader />
      </div>
    );
  }

  return (
    <UserProvider value={{ user, setUserData: setUser }}>
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
              <Profile onSignout={onSignout} />
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
    </UserProvider>
  );
}

export default App;
