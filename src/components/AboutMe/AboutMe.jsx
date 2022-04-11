import { Link } from "../Link/Link";
import Avatar from "../../images/about-me-avatar.png";
import "./AboutMe.css";

export const AboutMe = () => {
    return (
        <section className="about-me">
            <h2 className="about-me__heading">О проекте</h2>
            <div className="about-me__info">
                <div className="about-me__info-container">
                    <h3 className="about-me__name">Виталий</h3>
                    <h4 className="about-me__profession">Фронтенд-разработчик, 30 лет</h4>
                    <p className="about-me__about">
                        Я родился и живу в Саратове, закончил факультет экономики СГУ. 
                        У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. 
                        Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». 
                        После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <Link className="about-me__link">Facebook</Link>
                    <Link className="about-me__link">Github</Link>
                </div>
                <div className="about-me__info-container">
                    <img className="aboute-me__avatar" alt="аватар" src={Avatar} />
                </div>
            </div>
        </section>
    )
}