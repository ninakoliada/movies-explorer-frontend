import { Link } from "../Link/Link";
import PortfolioPointer from "../../images/portfolio-pointer.svg";
import "./Portfolio.css";

export const Portfolio = () => {
    return (
        <section className="portfolio">
             <h2 className="portfolio__heading">Портфолио</h2>
             <Link href="https://practicum.yandex.ru" target="_blank" className="portfolio__link">Статичный сайт<img className="portfolio__link_image" alt="стрелочка" src={PortfolioPointer}/></Link>
             <Link href="https://practicum.yandex.ru" target="_blank" className="portfolio__link">Адаптивный сайт<img className="portfolio__link_image" alt="стрелочка" src={PortfolioPointer}/></Link>
             <Link href="https://practicum.yandex.ru" target="_blank" className="portfolio__link">Одностраничное приложение<img className="portfolio__link_image" alt="стрелочка" src={PortfolioPointer}/></Link>
        </section>
    )
}