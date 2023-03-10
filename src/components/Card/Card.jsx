import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

function Card({ id, name, gender, onClose, species, image }) {
  return (
    <div className={styles.contenedor}>
      <button className={styles.boton} onClick={() => onClose(id)}>
        X
      </button>
      <Link to={`/detail/${id}`}>
        <h2 className={styles.name}> {name.toUpperCase()}</h2>
      </Link>
      <h2 className={styles.species}> {species.toUpperCase()}</h2>
      <h2 className={styles.gender}> {gender.toUpperCase()}</h2>
      <img className={styles.imagen} src={image} alt={name} />
    </div>
  );
}

export default Card;
