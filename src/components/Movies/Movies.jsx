import { Header } from "../Header/Header";
import { Button } from "../Button/Button"
import { MoviesCard } from "../MoviesCard/MoviesCard"
import { SearchForm } from "../SearchForm/SearchForm"

import "./Movies.css";
import { Footer } from "../Footer/Footer";

export const Movies = () => {
    return (
        <main className="movies">
            <Header />
            <SearchForm />
            <MoviesCard />
            <div className="movies__button-container">
                <Button className="movies__button">Ещё</Button>
            </div>
            <Footer />
        </main>
    )
}