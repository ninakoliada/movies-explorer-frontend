import { Button } from "../Button/Button";
import { Header } from "../Header/Header";
import { Input } from "../Input/Input";

import "./Profile.css";

export const Profile = () => {
    return (
        <>
        <Header />
        <main className="profile">
            <form className="profile__form">
                <h1 className="profile__heading">Привет, Виталий!</h1>

                <form className="profile__input_container">
                    <div className="profile__input_area">
                        <Input className="profile__input" id="name" name="name" type="text" variant="special" label="Имя" value="Виталий" />
                    </div>
                    <div className="profile__stick"></div>
                    <div className="profile__input_area">
                        <Input className="profile__input" id="email" name="email" type="email" variant="special" label="E-mail" value="pochta@yandex.ru"/>
                    </div>
                </form>

                <div className="profile__button-container">
                    <Button className="profile__button">Редактировать</Button>
                    <Button to="/" className="profile__button profile__button_red">Выйти из аккаунта</Button>
                </div>
            </form>
        </main>
        </>
    )
}
