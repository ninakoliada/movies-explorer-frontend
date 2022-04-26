export const MOVIES_HOST = 'https://api.nomoreparties.co';

export const getMovies = () => {
    return fetch(MOVIES_HOST + '/beatfilm-movies')
        .then(res => res.json())
        .catch(err => {
            console.log(err);
        });
}