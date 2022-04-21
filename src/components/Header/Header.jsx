import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import HeaderLogo from "../../images/header-logo.svg";
import AccountLogo from "../../images/account-logo.svg";
import { Button } from '../Button/Button';
import { Link } from "../Link/Link";
import { Sidebar } from "../Sidebar/Sidebar";
import './Header.css';
import { useState } from "react";

export const Header = (props) => {
  const [sidebarVisible, setSidebarVisible] = useState();

  const className = `header ${props.className ? props.className : ''}`;
   
  function closeSidebar() {
    setSidebarVisible(false);
  }

  function openSidebar() {
    setSidebarVisible(true);
  }

  return (
    <header className={className}>
        <Switch>
          <Route path="/" exact>
            <Link to="/"><img className="header__logo" alt="logo" src={HeaderLogo}/></Link>
            <div className="header__container">
              <Link to="/sign-up" className="header__link">Регистрация</Link>   
              <Button to="/sign-in" className="header__button">Войти</Button>
            </div>
          </Route>
          <Route path="*">
            <div className="header__container">
              <Link to="/"><img className="header__logo" alt="logo" src={HeaderLogo}/></Link>
              <Link to="/movies" className="header__link_movies header__desktop">Фильмы</Link>
              <Link to="/saved-movies" className="header__link_movies header__link_save-movies header__desktop">Сохраненные фильмы</Link>
            </div>
            <Link to="/profile" className="header__account_link header__desktop">Аккаунт <img className="header__account_logo" alt="иконка аккаунта" src={AccountLogo} /></Link>
            <Button className="header__menu-touch" onClick={openSidebar} />
            <Sidebar visible={sidebarVisible} onClose={closeSidebar} />
          </Route>
        </Switch>
    </header>
  );
};

