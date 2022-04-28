import { useCallback, useEffect, useState } from "react";

import { Header } from "../Header/Header";
import { Button } from "../Button/Button"
import { MoviesCard } from "../MoviesCard/MoviesCard"
import { SearchForm } from "../SearchForm/SearchForm"
import { Footer } from "../Footer/Footer";

import { useMovies } from "../../contexts/Movies";
import { MOVIES_HOST } from "../../utils/MoviesApi";
import { addMovie, removeMovie } from "../../utils/MainApi";
import { useFavouriteMovies } from "../../contexts/FavouriteMovies";

import "./Movies.css";

export const Movies = () => {
    const localMovies = useMovies();
    const { favouriteMovies, updateFavouriteMovies } = useFavouriteMovies();

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [perPage, setPerPage] = useState(3);
    const [page, setPage] = useState(0);
    const [firstPage, setFirstPage] = useState(12);
    const [screenWidth, setScreenWidth] = useState(0);

    const onResizeWindow = useCallback(() => {
        setScreenWidth(document.body.offsetWidth);
    }, []);

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

    useEffect(() => {
        window.addEventListener('resize', onResizeWindow);
        onResizeWindow();

        return () => {
            window.removeEventListener('resize', onResizeWindow);
        }
    }, [onResizeWindow]);

    function onSearch({ search, onlyShort }) {
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

    const onLikeMovie = useCallback((data) => {
        return () => {
            const isLikedMovie = favouriteMovies.find(({ movieId }) => movieId === data.id)
            if (isLikedMovie) {
                removeMovie(isLikedMovie._id)
                    .then(() => {
                        updateFavouriteMovies(favouriteMovies.filter(({ _id }) => _id !== isLikedMovie._id))
                    })
            } else {
                addMovie(data).then((res) => {         
                    updateFavouriteMovies([...favouriteMovies, res]);
                })
            }
        };
    }, [favouriteMovies, updateFavouriteMovies])

    return (
        <>
            <Header />
            <SearchForm onSubmit={onSearch} />
            <main className="movies">
                {error && <div className="movies__error">{error}</div>}
                {!error && (
                    <>
                        <div className="movies__container">
                            {movies.slice(0, firstPage + page * perPage).map((item) => (
                                <MoviesCard
                                    key={item.id}
                                    name={item.nameRU}
                                    imageSrc={MOVIES_HOST + item.image.url}
                                    duration={item.duration}
                                    onLike={onLikeMovie(item)}
                                    isLiked={favouriteMovies.find(({ movieId }) => movieId === item.id)}
                                    href={item.trailerLink} />
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