import { NavLink } from "react-router";
import styles from "./Navigation.module.scss";

const setActive = ({ isActive }) =>
  isActive ? styles.activeLink : styles.link;

function Navigation() {
  return (
    <nav>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <NavLink to="/" className={setActive}>
            Profile
          </NavLink>
        </li>
        <li className={styles.navigationItem}>
          <NavLink to="/about" className={setActive}>
            About me
          </NavLink>
        </li>
        <li className={styles.navigationItem}>
          <NavLink to="/services" className={setActive}>
            Services
          </NavLink>
        </li>
        <li className={styles.navigationItem}>
          <NavLink to="/contact" className={setActive}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
