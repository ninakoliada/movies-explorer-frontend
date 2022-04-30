import { MOVIES_HOST } from "./MoviesApi";

export const MAIN_HOST = 'https://api.diploma.pinakoladda.nomoredomains.work';

const parseResponse = (res) => {
    if (res.ok) {
        return res.json();
    }

    return Promise.reject({ code: res.status });
}

const _fetch = (path, options = {}) => {
    return fetch(MAIN_HOST + path, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        ...options,
        body: options.body ? JSON.stringify(options.body) : undefined,
    }).then(parseResponse);
}

export const getMyMovies = () => _fetch('/movies');

export const addMovie = ({ id, country, director, duration, year, description, image, nameRU, nameEN, trailerLink, thumbnail }) => {
    const imageUrl = MOVIES_HOST + image.url;
    const movie = {
        country: country || 'Мир',
        director,
        duration,
        year,
        description: description || 'Empty',
        nameRU: nameRU || nameEN,
        nameEN: nameEN || nameRU,
        image: imageUrl,
        thumbnail: thumbnail || imageUrl,
        trailerLink,
        movieId: id,
    };

    return _fetch('/movies', {
        method: "POST",
        body: movie,
    });
}

export const removeMovie = (movieId) => {
    return _fetch(`/movies/${movieId}`, { method: 'DELETE' });
}

export const signUp = ({ name, email, password }) => {
    return _fetch('/signup', {
        method: "POST",
        body: { name, email, password },
    });
}

export const signIn = ({ email, password }) => {
    return _fetch('/signin', {
        method: "POST",
        body: { email, password },
    });
}
export const signOut = () => {
    return _fetch('/signout');
}

export const getMe = () => {
    return _fetch('/users/me');
}

export const updateMe = ({ email, name }) => {
    return _fetch('/users/me', { method: 'PATCH', body: { email, name } });
}