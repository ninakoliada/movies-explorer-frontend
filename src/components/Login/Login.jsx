import { useCallback, useState } from "react";
import isEmail from 'validator/lib/isEmail';

import { Button } from "../Button/Button";
import { Link } from "../Link/Link";
import Logo from "../../images/header-logo.svg";
import { Input } from "../Input/Input";

import { signIn } from "../../utils/MainApi";
import { useFormWithValidation } from "../../hooks/useForm";

import "./Login.css";

export const Login = ({ onSuccess }) => {
    const { values, isValid, errors, handleChange } = useFormWithValidation([{ name: 'email', check: isEmail }]);
    const [failedStatus, setFailedStatus] = useState(null);
    
    function onSubmit (event) {
        event.preventDefault();

        signIn(values)
            .then(() => {
                onSuccess();
            })
            .catch(error => {
                if (error.code === 401) {
                    setFailedStatus(401);
                } else {
                    setFailedStatus(500);
                }
            });
    }

    const onChange = useCallback((event) => {
        setFailedStatus(null);
        handleChange(event);
    }, [handleChange])

    const emailError = values.email && errors.email ? 'Некорректный email' : undefined;
    let passwordError = ''

    if (failedStatus === 500) {
        passwordError = 'Что-то пошло не так...';
    }

    if (failedStatus === 401) {
        passwordError = 'Неправильные email или пароль';
    }

    return (
        <main className="login">
           <form className="login__container" onSubmit={onSubmit} onChange={onChange}>
                <Link className="login__logo-link" to="/"><img className="login__logo" alt="лого" src={Logo} /></Link>
                <h1 className="login__heading">Рады видеть!</h1>

                <Input className="login__input" id="email" name="email" type="email" variant="default" label="E-mail" required error={failedStatus || Boolean(emailError)} errorText={emailError}/>

                <Input className="login__input" id="password" name="password" type="password" variant="default" label="Пароль" required error={failedStatus} errorText={failedStatus === 500 ? 'Что-то пошло не так...' : passwordError}/>

                <Button className="login__button" disabled={!isValid}>Войти</Button>
                <div className="login__link-container">
                    <p className="login__link-text">Ещё не зарегистрированы?</p>
                    <Link to="/sign-up" className="login__link">Регистрация</Link>
                </div>
            </form>
        </main>
    )
}