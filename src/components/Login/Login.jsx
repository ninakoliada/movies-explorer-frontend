import { Button } from "../Button/Button";
import { Link } from "../Link/Link";
import Logo from "../../images/header-logo.svg";
import "./Login.css";

export const Login = () => {
    return (
        <main className="login">
           <div className="login__container">
                <Link to="/"><img className="login__logo" alt="лого" src={Logo} /></Link>
                <h1 className="login__heading">Рады видеть!</h1>

                <label className="login__text" id="email">E-mail</label>
                <input className="login__input" id="email" type="email"></input>

                <label className="login__text" id="password">Пароль</label>
                <input className="login__input" id="password" type="password"></input>

                <Button className="login__button">Войти</Button>
                <div className="login__link-container">
                    <p className="login__link-text">Ещё не зарегистрированы?</p>
                    <Link to="/sign-up" className="login__link">Регистрация</Link>
                </div>
            </div>
        </main>
    )
}