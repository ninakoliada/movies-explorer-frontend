export const MAIN_HOST = 'https://api.diploma.pinakoladda.nomoredomains.work';

export const postMovies = (data) => {
    return fetch(MAIN_HOST + '/movies', {
        method: "POST",
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .catch(err => {
            console.log(err);
        });
}