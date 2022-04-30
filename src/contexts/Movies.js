import React, { useContext } from 'react';

export const MoviesContext = React.createContext([]);

export const MoviesProvider = MoviesContext.Provider;

export const useMovies = () => useContext(MoviesContext);