import WebWorld from "../../images/web-world.svg"
import { Button } from "../Button/Button";

import "./Promo.css";

export const Promo = () => {
    return (
        <section className="promo">
            <div className="promo__container">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <Button href="#about-project" className="promo__button">Узнать больше</Button>
            </div>
            <img className="promo__image" alt="wed-world" src={WebWorld} />
        </section>
    )
}