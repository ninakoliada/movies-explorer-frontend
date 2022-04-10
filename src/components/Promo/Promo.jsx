import WebWorld from "../../images/web-world.svg"
import { Button } from "../Button/Button";

import "./Promo.css";

export const Promo = () => {
    return (
        <section className="promo">
            <div className="promo__container">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <Button className="promo__button">Узнать больше</Button>
            </div>
            <img alt="wed-world" src={WebWorld} />
        </section>
    )
}