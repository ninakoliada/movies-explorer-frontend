import { Button } from "../Button/Button";
import { useHistory } from "react-router-dom";

import "./NotFound.css";

export const NotFound = () => {

    let history = useHistory();
    
    function handleClick() {
    history.goBack();
    }

    return (
        <main className="notFound">
            <div className="notFound__container">
                <h1 className="notFound__heading">404</h1>
                <p className="notFound__text">Страница не найдена</p>
            </div>
            <Button className="notFound__button" onClick={handleClick}>Назад</Button>
        </main>
    )
}