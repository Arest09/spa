import {NavLink } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUtensils} from '@fortawesome/free-solid-svg-icons';
import style from '../Header/Header.module.scss'
import '../../App.scss'


export function Header() {
  console.log(style)
  return (
    
    <header className={style.header}>
      <div className="container">
        <div className="flex justify-between">
          <nav>
            <ul className={style.menu}>
              <li className={style.list}>
                <NavLink to="/about">About</NavLink>
              </li>
              <li className={style.list}>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
          <div > <FontAwesomeIcon icon={faUtensils} className="text-lg" /></div>
        </div>
      </div>
    </header>
  );
}
