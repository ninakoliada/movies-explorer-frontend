import { Header } from "../Header/Header";
import { Button } from "../Button/Button";
import { MoviesCard } from "../MoviesCard/MoviesCard";
import { SearchForm } from "../SearchForm/SearchForm";
import { Footer } from "../Footer/Footer";

import "./SavedMovies.css";

export const SavedMovies = () => {
    return (
        <>
            <Header />
            <main className="savedMovies">
                <SearchForm />
                <MoviesCard />
                <div className="movies__button-container">
                    <Button className="movies__button">Ещё</Button>
                </div>
                <Footer />
            </main>
        </>
    )
}