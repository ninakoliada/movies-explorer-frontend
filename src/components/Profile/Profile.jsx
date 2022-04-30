import { useCallback, useEffect, useState } from "react";
import { useUserData } from "../../contexts/User";
import { useFormWithValidation } from "../../hooks/useForm";
import { updateMe } from "../../utils/MainApi";
import { Button } from "../Button/Button";
import { Header } from "../Header/Header";
import { Input } from "../Input/Input";
import { Popup } from "../Popup/Popup";
import isEmail from 'validator/lib/isEmail';

import "./Profile.css";

export const Profile = ({ onSignout }) => {
    const { values, handleChange, isValid, errors, resetForm } = useFormWithValidation([{ name: 'email', check: isEmail }]);
    const { user, setUserData } = useUserData();
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [failedMessage, setFailedMessage] = useState(null);
    
    useEffect(() => {
        user && resetForm({ name: user.name, email: user.email });
    }, [user, resetForm])

    function onSubmit (event) {
        event.preventDefault();
        setFailedMessage(null);

        updateMe(values).then(setUserData).catch((err) => {
            if (err.code === 400) {
                setFailedMessage('Некорректные данные')
            } else if (err.code === 409) {
                setFailedMessage('Такой email уже зарегистрирован')
            } else {
                setFailedMessage('Что-то пошло не так...')
            }

            setVisiblePopup(true);
        }).finally(() => {
            setVisiblePopup(true);
        });
    }

    const onClosePopup = useCallback(() => {
        setVisiblePopup(false);
    }, [])

    const { name, email } = user || {};

    return (
        <>
            <Header />
            <main className="profile">
                <form className="profile__form" onSubmit={onSubmit} onChange={handleChange}>
                    <h1 className="profile__heading">Привет, {name}!</h1>

                    <div className="profile__input_container">
                        <div className="profile__input_area">
                            <Input className="profile__input" placeholder="Имя обязательно" id="name" name="name" type="text" variant="special" label="Имя" defaultValue={values.name || ''} required error={errors.name} pattern="[A-Za-zА-Яа-яЁё\s-]*" />
                        </div>
                        <div className="profile__stick"></div>
                        <div className="profile__input_area">
                            <Input className="profile__input" placeholder="Email обязателен"  id="email" name="email" type="email" variant="special" label="E-mail" defaultValue={values.email || ''} required error={errors.email} />
                        </div>
                    </div>

                    <div className="profile__button-container">
                        <Button className="profile__button" disabled={!isValid || (values.name === name  && values.email === email)}>Редактировать</Button>
                        <Button onClick={onSignout} className="profile__button profile__button_red">Выйти из аккаунта</Button>
                    </div>
                </form>
            </main>
            <Popup className="profile__popup" visible={visiblePopup} onClose={onClosePopup}>
                {failedMessage || 'Успешно сохранено'}
            </Popup>
        </>
    )
}
