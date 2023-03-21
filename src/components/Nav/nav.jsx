import React from "react";
import styles from "./nav.module.css";
import SearchBar from "../Searchbar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <div>
      <nav className={styles.nav}>
        <div>
          <ul>
            <li className={styles.botonera}>
              <Link to="about" className={styles.botones}>
                About
              </Link>
              <Link to="home" className={styles.botones}>
                Home
              </Link>
              <Link to="favorites" className={styles.botones}>
                Favorites
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.buscador}>
          <SearchBar onSearch={onSearch} />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
