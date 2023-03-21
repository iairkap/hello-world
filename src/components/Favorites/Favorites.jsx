import { useSelector, useDispatch } from "react-redux";
import styles from "./Favorites.module.css";
import { Link } from "react-router-dom";
import { OrderCards, filterCards } from "../../redux/actions";

const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(OrderCards(event.target.value));
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };
  return (
    <div>
      <div className={styles.selectors}>
        <select name="order" className={styles.select} onChange={handleOrder}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendiente">Descendiente</option>
        </select>
        <select name="filter" className={styles.select} onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>
      {myFavorites.map((character) => {
        return (
          <div>
            <div className={styles.contenedor}>
              <Link to={`/detail/${character.id}`}>
                <h2 className={styles.name}> {character.name.toUpperCase()}</h2>
              </Link>
              <h2 className={styles.species}>
                {" "}
                {character.species.toUpperCase()}
              </h2>
              <h2 className={styles.gender}>
                {" "}
                {character.gender.toUpperCase()}
              </h2>
              <img
                className={styles.imagen}
                src={character.image}
                alt={character.name}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
