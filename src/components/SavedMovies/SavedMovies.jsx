import { useCallback, useState } from "react";
import { Header } from "../Header/Header";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import { SearchForm } from "../SearchForm/SearchForm";
import { Footer } from "../Footer/Footer";
import { Preloader } from "../Preloader/Preloader";

import { useFavouriteMovies } from "../../contexts/FavouriteMovies";

import "./SavedMovies.css";
import { removeMovie } from "../../utils/MainApi";

export const SavedMovies = () => {
    const { favouriteMovies, isLoading, updateFavouriteMovies } = useFavouriteMovies();
    const [nameFilter, setNameFilter] = useState(null);
    const [onlyShort, setOnlyShort] = useState(false);

    const searchRgx = nameFilter ? new RegExp(nameFilter) : null;

    const onRemoveMovie = useCallback((id) => {
        return () => removeMovie(id).then(() => {
            const d = favouriteMovies.filter(({ _id }) => _id !== id);

            updateFavouriteMovies(d);
        });
    }, [favouriteMovies, updateFavouriteMovies]);

    const onSearch = useCallback(({ search, onlyShort }) => {
        setNameFilter(search);
        setOnlyShort(onlyShort);
    }, [])
    
    const filteredMovies = favouriteMovies
        .filter(({ duration }) => onlyShort ? duration < 40 : true)
        .filter(({ nameRU }) => searchRgx ? searchRgx.test(nameRU) : true);

    return (
        <>
            <Header />
            <SearchForm onSubmit={onSearch}/>
            <main className="savedMovies">
                {isLoading && favouriteMovies.length && (<Preloader />)}
                {filteredMovies.length === 0 && (nameFilter || onlyShort) && (
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