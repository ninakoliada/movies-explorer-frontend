import { useEffect, useState } from "react";

import { Header } from "../Header/Header";
import { Button } from "../Button/Button"
import { MoviesCard } from "../MoviesCard/MoviesCard"
import { SearchForm } from "../SearchForm/SearchForm"
import { Footer } from "../Footer/Footer";

import { getMovies, MOVIES_HOST } from "../../utils/MoviesApi";

import "./Movies.css";

export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [perPage, setPerPage] = useState(3);
    const [page, setPage] = useState(0);
    const [firstPage, setFirstPage] = useState(12);
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        if (screenWidth > 810) {
            setFirstPage(12);
            setPerPage(3);
        } else {
            setFirstPage(8);
            setPerPage(2);
        }

        if (screenWidth < 550) {
            setFirstPage(5);
        }
    }, [screenWidth]);

    function onResizeWindow() {
        setScreenWidth(document.body.offsetWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', onResizeWindow);

        return () => {
            window.removeEventListener('resize', onResizeWindow);
        }
    }, []);

    useEffect(() => {
        const localMovies = localStorage.getItem('movies');
        onResizeWindow();

        if (localMovies) {
            setMovies(JSON.parse(localMovies));
        }

        getMovies()
            .then(data => {
                localStorage.setItem('movies', JSON.stringify(data));
                setMovies(data);
            })
    }, []);

    function onSearch({ search, onlyShort }) {
        const localMovies = JSON.parse(localStorage.getItem('movies'));
        const searchRgx = new RegExp(search);

        if (!search) {
            setError('Нужно ввести ключевое слово');
            setMovies([]);
            return;
        }

        const filteredMovies = localMovies
            .filter(({ duration }) => onlyShort ? duration < 40 : true)
            .filter(({ nameRU }) => searchRgx.test(nameRU));

        if (filteredMovies.length === 0) {
            setMovies([]);
            setError('Ничего не найдено :(');
            return;
        }

        setError(null);
        setPage(1);
        setMovies(filteredMovies);
    }

    function onLoadMore () {
        setPage(page+1);
    }

    return (
        <>
            <Header />
            <SearchForm onSubmit={onSearch} />
            <main className="movies">
                {error && <div className="movies__error">{error}</div>}
                {!error && (
                    <>
                        <div className="movies__container">
                            {movies.slice(0, firstPage + page * perPage).map(({ id, nameRU, image, duration, trailerLink }) => (
                                <MoviesCard
                                    key={id}
                                    name={nameRU}
                                    imageSrc={MOVIES_HOST + image.url}
                                    duration={duration}
                                    href={trailerLink} />
                            ))}
                        </div>
                        {firstPage + page * perPage < movies.length && (
                            <div className="movies__button-container">
                                <Button className="movies__button" onClick={onLoadMore}>Ещё</Button>
                            </div>
                        )}
                    </>
                )}
            </main>
            <Footer />
        </>
    );   
}