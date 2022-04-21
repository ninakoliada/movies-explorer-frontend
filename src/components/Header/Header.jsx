import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import HeaderLogo from "../../images/header-logo.svg";
import AccountLogo from "../../images/account-logo.svg";
import { Button } from '../Button/Button';
import { Link } from "../Link/Link";
import './Header.css';

export const Header = (props) => {
  const className = `header ${props.className ? props.className : ''}`;
   
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
              <Button className="header__menu-touch"/>
          </Route>
        </Switch>
    </header>
  );
};

