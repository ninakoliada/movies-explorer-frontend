import { Button } from "../Button/Button";
import { Header } from "../Header/Header";

import "./Profile.css";

export const Profile = () => {
    return (
        <>
        <Header />
        <main className="profile">
            <h1 className="profile__heading">Привет, Виталий!</h1>

            <div className="profile__input_container">
                <div className="profile__input_area">
                    <label className="profile__input_text" id="name">Имя</label>
                    <input className="profile__input" id="name" type="text"></input>
                </div>
                <div className="profile__stick"></div>
                <div className="profile__input_area">
                    <label className="profile__input_text" id="email">E-mail</label>
                    <input className="profile__input" id="email" type="email"></input>
                </div>
            </div>

            <div className="profile__button-container">
                <Button className="profile__button">Редактировать</Button>
                <Button to="/" className="profile__button profile__button_red">Выйти из аккаунта</Button>
            </div>
        </main>
        </>
    )
}
