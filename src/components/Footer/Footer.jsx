import { Link } from "../Link/Link";
import "./Footer.css";

export const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__info">
                <p className="footer__year">© 2022</p>
                <div className="footer__container">
                    <Link className="footer__link">Яндекс.Практикум</Link>
                    <Link className="footer__link">Github</Link>
                    <Link className="footer__link">Facebook</Link>
                </div>
            </div>
        </footer>
    )
}
