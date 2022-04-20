import { Header } from "../Header/Header";
import { Button } from "../Button/Button"
import { MoviesCard } from "../MoviesCard/MoviesCard"
import { SearchForm } from "../SearchForm/SearchForm"
import { Footer } from "../Footer/Footer";

import "./Movies.css";

export const Movies = () => {
    return (
        <>
            <Header />
            <main className="movies">
                <SearchForm />
                <div className="movies__container">
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                </div>
                <div className="movies__button-container">
                    <Button className="movies__button">Ещё</Button>
                </div>
                <Footer />
            </main>
        </>
    )
        
}