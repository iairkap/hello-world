/* import React from "react";
import styles from "./Details.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { detailId } = useParams();
  const [characters, setCharacter] = useState({});

  useEffect(() => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "af4bd895c003.dd5027d1731db48b4739";

    fetch(`${URL_BASE}/character/${detailId}?key=${KEY}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]); //simula los ciclos de vida

  return (
    <div className={styles.contenedorGeneral}>
      <div className="ContenedorTexto">
        <h1>{characters.name}</h1>
        <h2>{characters.status}</h2>
        <h2>{characters.species}</h2>
        <h2>{characters.gender}</h2>
        <h2>{characters.origin?.name}</h2>
      </div>
      <hr />
      <div className="ContenedorImagen">
        <img
          className={styles.imagen}
          src={characters.image}
          alt={characters.name}
        />
      </div>
    </div>
  );
};

export default Detail;
 */

import React from "react";
import styles from "./Details.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { detailId } = useParams();
  const [characters, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "af4bd895c003.dd5027d1731db48b4739";

    setIsLoading(true); // indicar que se está cargando la información

    fetch(`${URL_BASE}/character/${detailId}?key=${KEY}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      })
      .finally(() => {
        setIsLoading(false); // indicar que se ha terminado de cargar la información
      });
  }, [detailId]);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1> // mostrar un mensaje de carga si isLoading es true
      ) : (
        <div className={styles.contenedorGeneral}>
          <div className={styles.contenedorTexto}>
            <div>
              <h1>{characters.name}</h1>
              <h2>Status: {characters.status}</h2>
              <h2>Species: {characters.species}</h2>
              <h2>Gender: {characters.gender}</h2>
              <h2>Origin: {characters.origin?.name}</h2>
            </div>
            <hr />
          </div>
          <div className={styles.contenedorImagen}>
            <img
              className={styles.imagen}
              src={characters.image}
              alt={characters.name}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
