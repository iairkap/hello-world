import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { addFavorite, deleteFavorite } from "../../redux/actions";

function Card({ id, name, gender, onClose, species, image }) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(id));
    } else {
      setIsFav(true);
      dispatch(addFavorite({ name, gender, onClose, species, image, id }));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);
  return (
    <div className={styles.contenedor}>
      <div className={styles.botonera}>
        {isFav ? (
          <button className={styles.boton} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={styles.botonclick} onClick={handleFavorite}>
            🤍
          </button>
        )}
        <Link to={`/detail/${id}`}>
          <h2 className={styles.name}> {name.toUpperCase()}</h2>
        </Link>
        <button className={styles.botons} onClick={() => onClose(id)}>
          X
        </button>
      </div>

      <img className={styles.imagen} src={image} alt={name} />
      <div className={styles.subinfo}>
        <h2 className={styles.species}> {species.toUpperCase()}</h2>
        <h2 className={styles.gender}> {gender.toUpperCase()}</h2>
      </div>
    </div>
  );
}

export default Card;
