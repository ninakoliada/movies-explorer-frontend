import HeaderLogo from "../../images/header-logo.svg";
import { Button } from '../Button/Button';
import { Link } from "../Link/Link";
import './Header.css';


export const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" alt="logo" src={HeaderLogo} />
      <div className="header__container">
        <Link to="/sign-in" className="header__link">Регистрация</Link>   
        <Button className="header__button">Войти</Button>
      </div>
    </header>
  );
};
