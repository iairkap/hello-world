import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.css";

function Cards({ characters, onClose }) {
  return (
    <div className={styles.contenedor}>
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          <div className="contenedor">
            <Card
              key={id}
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              onClose={onClose}
            />
          </div>
        );
      })}
    </div>
  );
}
export default Cards;
