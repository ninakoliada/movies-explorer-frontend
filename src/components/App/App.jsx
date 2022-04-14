import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Profile } from '../Profile/Profile';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/sign-up">
            <Register />
          </Route>
          <Route path="/sign-in">
            <Login />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
