import Logo from "../../images/header-logo.svg";
import { Button } from "../Button/Button";
import { Link } from "../Link/Link";
import "./Register.css";


export const Register = () => {
    return (
        <main className="register">
            <div className="register__container">
                <Link to="/"><img className="register__logo" alt="лого" src={Logo} /></Link>
                <h1 className="register__heading">Добро пожаловать!</h1>

                <label className="register__text" id="name">Имя</label>
                <input className="register__input" id="name" type="text"></input>

                <label className="register__text" id="email">E-mail</label>
                <input className="register__input" id="email" type="email"></input>

                <label className="register__text" id="password">Пароль</label>
                <input className="register__input" id="password" type="password"></input>

                <Button className="register__button">Войти</Button>
                <div className="register__link-container">
                    <p className="register__link-text">Уже зарегистрированы?</p>
                    <Link to="/sign-in" className="register__link">Войти</Link>
                </div>
            </div>
        </main>
    )
}