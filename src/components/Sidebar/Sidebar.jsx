import { useHistory } from "react-router-dom";
import { Link } from "../Link/Link";
import AccountLogo from "../../images/account-logo.svg";

import "./Sidebar.css";

const LINKS = [
  { path: '/', name: 'Главная' },
  { path: '/movies', name: 'Фильмы' },
  { path: '/saved-movies', name: 'Сохраненные фильмы' },
];

export const Sidebar = ({ visible, onClose }) => {
  const history = useHistory();

  return (
    <div className={`sidebar ${visible ? 'sidebar_visible' : ''}`}>
      <div className="sidebar__paranja" onClick={onClose} />
      <nav className="sidebar__container">
        <div className="sidebar__links">
          {LINKS.map(({ path, name }) => (
            <Link key={path} className={`sidebar__link ${history.location.pathname === path ? 'sidebar__link_active' : ''}`} to={path}>{name}</Link>
          ))}
        </div>
        <Link className="sidebar__profile" to="/profile">
          Аккаунт
          <img className="sidebar__profile-logo" alt="иконка аккаунта" src={AccountLogo} />
        </Link>
        <div className="sidebar__close" onClick={onClose} />
      </nav>
    </div>
  )
}