import { Button } from "../Button/Button";
import { Link } from "../Link/Link";
import Logo from "../../images/header-logo.svg";
import { Input } from "../Input/Input";

import "./Login.css";

export const Login = () => {
    return (
        <main className="login">
           <form className="login__container">
                <Link to="/"><img className="login__logo" alt="лого" src={Logo} /></Link>
                <h1 className="login__heading">Рады видеть!</h1>

                <Input className="login__input" id="email" name="email" type="email" variant="default" label="E-mail" />

                <Input className="login__input" id="password" name="password" type="password" variant="default" label="Пароль" />

                <Button className="login__button">Войти</Button>
                <div className="login__link-container">
                    <p className="login__link-text">Ещё не зарегистрированы?</p>
                    <Link to="/sign-up" className="login__link">Регистрация</Link>
                </div>
            </form>
        </main>
    )
}