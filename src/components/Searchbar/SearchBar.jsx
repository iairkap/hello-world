import styles from "./Searchbar.module.css";
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={styles.contenedor}>
      <input type="search" className={styles.texto} onChange={handleChange} />
      <button
        className={styles.boton}
        onClick={() => {
          onSearch(id);
        }}
      >
        AGREGAR
      </button>
    </div>
  );
}

export default SearchBar;

//poner un margin bottom
