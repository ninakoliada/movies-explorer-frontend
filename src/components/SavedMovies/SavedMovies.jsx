import { useCallback, useEffect, useState } from "react";
import { Header } from "../Header/Header";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import { SearchForm } from "../SearchForm/SearchForm";
import { Footer } from "../Footer/Footer";
import { Preloader } from "../Preloader/Preloader";

import { useFavouriteMovies } from "../../contexts/FavouriteMovies";

import "./SavedMovies.css";
import { removeMovie } from "../../utils/MainApi";
import { useForm } from "../../hooks/useForm";

export const SavedMovies = () => {
    const { favouriteMovies, isLoading, updateFavouriteMovies } = useFavouriteMovies();
    const { values, setValues, handleChange } = useForm();
    const [searchFilters, setSearchFitlers] = useState({});

    useEffect(() => {
        const cachedSearchFilters = localStorage.getItem('searchMyMovies');

        if (cachedSearchFilters) {
            const form = JSON.parse(cachedSearchFilters);
            setValues(form);
            setSearchFitlers(form);
        }
    }, [setValues, setSearchFitlers])
    
    const searchRgx = searchFilters.search ? new RegExp(searchFilters.search, 'i') : null;

    const onRemoveMovie = useCallback((id) => {
        return () => removeMovie(id).then(() => {
            const d = favouriteMovies.filter(({ _id }) => _id !== id);

            updateFavouriteMovies(d);
        });
    }, [favouriteMovies, updateFavouriteMovies]);

    const onSearch = useCallback(form => {
        setSearchFitlers(form);
        localStorage.setItem('searchMyMovies', JSON.stringify(form));
    }, [setSearchFitlers])
    
    const filteredMovies = favouriteMovies
        .filter(({ duration }) => searchFilters.onlyShort ? duration < 40 : true)
        .filter(({ nameRU }) => searchRgx ? searchRgx.test(nameRU) : true);

    return (
        <>
            <Header />
            <SearchForm onSubmit={onSearch} onChange={handleChange} search={values.search} onlyShort={values.onlyShort} />
            <main className="savedMovies">
                {isLoading && favouriteMovies.length && (<Preloader />)}
                {filteredMovies.length === 0 && (searchFilters.search || searchFilters.onlyShort) && (
                    <p className="savedMovies__notFound">Ничего не найдено</p>
                )}
                <div className="savedMovies__container">
                    {filteredMovies
                        .map((item) => (
                            <MoviesCard
                                key={item._id}
                                name={item.nameRU}
                                imageSrc={item.image}
                                duration={item.duration}
                                onLike={onRemoveMovie(item._id)}
                                isSaved
                                href={item.trailerLink} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    )
}