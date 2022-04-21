import { Header } from "../Header/Header";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import { SearchForm } from "../SearchForm/SearchForm";
import { Footer } from "../Footer/Footer";

import "./SavedMovies.css";

export const SavedMovies = () => {
    return (
        <>
            <Header />
            <SearchForm />
            <main className="savedMovies">
                <div className="savedMovies__container">
                    <MoviesCard isSaved />
                    <MoviesCard isSaved />
                    <MoviesCard isSaved />
                </div>
            </main>
            <Footer />
        </>
    )
}