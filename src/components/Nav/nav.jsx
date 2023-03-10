import React from "react";
import styles from "./nav.module.css";
import SearchBar from "../Searchbar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.botonera}>
          <Link to="about" className={styles.link}>
            About
          </Link>
          <Link to="home">Home</Link>
        </div>
        <SearchBar onSearch={onSearch} />
      </nav>
    </div>
  );
};

export default Nav;
