import HeaderLogo from "../../images/header-logo.svg";
import { Button } from '../Button/Button';
import { Link } from "../Link/Link";
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <Link to="/"><img className="header__logo" alt="logo" src={HeaderLogo}/></Link>
      <div className="header__container">
        <Link to="/sign-up" className="header__link">Регистрация</Link>   
        <Button to="/sign-in" className="header__button">Войти</Button>
      </div>
    </header>
  );
};
