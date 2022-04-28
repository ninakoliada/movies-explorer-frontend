import { useCallback, useState } from "react";
import { useFormWithValidation } from "../../hooks/useForm";
import Logo from "../../images/header-logo.svg";
import { signIn, signUp } from "../../utils/MainApi";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Link } from "../Link/Link";
import "./Register.css";


export const Register = ({ onSuccess }) => {
    const { values, isValid, errors, handleChange } = useFormWithValidation();
    const [failedStatus, setFailedStatus] = useState(null);
    
    const onChange = useCallback((event) => {
        setFailedStatus(null);
        handleChange(event);
    }, [handleChange])

    let emailError = values.email && errors.email ? 'Некорректный email' : undefined;
    const nameError = values.name && errors.name ? 'Имя может содержать только латиницу, кириллицу, пробел или дефис.' : undefined;
    let passwordError = ''

    if (failedStatus === 409) {
        emailError = 'Такой email уже зарегистрирован';
    } else if (failedStatus) {
        passwordError = 'Что-то пошло не так...';
    }

    function onSubmit (event) {
        event.preventDefault();

        signUp(values)
            .then(() => {
                return signIn({ email: values.email, password: values.password });
            })
            .then(() => {
                onSuccess();
            })
            .catch((err) => {
                setFailedStatus(err.code)
            });
    }

    

    return (
        <main className="register">
            <form className="register__container" onSubmit={onSubmit}>
                <Link className="register__logo-link" to="/"><img className="register__logo" alt="лого" src={Logo} /></Link>
                <h1 className="register__heading">Добро пожаловать!</h1>
                
                <Input className="register__input" id="name" name="name" type="text" variant="default" label="Имя" onChange={onChange} required pattern="[A-Za-zА-Яа-яЁё\s-]*" error={failedStatus || nameError} errorText={nameError}/>
                <Input className="register__input" id="email" name="email" type="email" variant="default" label="E-mail" onChange={onChange} required error={failedStatus || emailError} errorText={emailError} />
                <Input className="register__input" id="password" name="password" type="password" variant="default" label="Пароль" onChange={onChange} required error={failedStatus} errorText={passwordError} />

                <Button className="register__button" type="submit" disabled={!isValid}>Зарегистрироваться</Button>
                <div className="register__link-container">
                    <p className="register__link-text">Уже зарегистрированы?</p>
                    <Link to="/sign-in" className="register__link">Войти</Link>
                </div>
            </form>
        </main>
    )
}