import Logo from "../../images/header-logo.svg";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Link } from "../Link/Link";
import "./Register.css";


export const Register = () => {
    return (
        <main className="register">
            <form className="register__container">
                <Link to="/"><img className="register__logo" alt="лого" src={Logo} /></Link>
                <h1 className="register__heading">Добро пожаловать!</h1>
                
                <Input className="register__input" id="name" name="name" type="text" variant="default" label="Имя" />
                <Input className="register__input" id="email" name="email" type="email" variant="default" label="E-mail" />
                <Input className="register__input" id="password" name="password" type="password" variant="default" label="Пароль" />

                <Button className="register__button">Войти</Button>
                <div className="register__link-container">
                    <p className="register__link-text">Уже зарегистрированы?</p>
                    <Link to="/sign-in" className="register__link">Войти</Link>
                </div>
            </form>
        </main>
    )
}