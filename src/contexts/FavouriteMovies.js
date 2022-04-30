import React, { useContext } from 'react';

export const FavouriteMoviesContext = React.createContext({ favouriteMovies: [], updateFavouriteMovies: () => { }, isLoading: false });

export const FavouriteMoviesProvider = FavouriteMoviesContext.Provider;

export const useFavouriteMovies = () => useContext(FavouriteMoviesContext);