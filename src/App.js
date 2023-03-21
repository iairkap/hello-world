import React from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/nav";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Details/Detail";
import Form from "./components/Forms/forms";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [access, setAcces] = useState(false);

  const login = (userData) => {
    const username = userData.username;
    const password = userData.password;
    if (userData.username === username && userData.password === password) {
      setAcces(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function onSearch(id) {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "af4bd895c003.dd5027d1731db48b4739";

    const existingCharacter = characters.find((char) => char.id === id);

    if (existingCharacter) {
      window.alert("Este personaje ya ha sido agregado anteriormente.");
      return; // No es necesario agregar el personaje nuevamente
    }
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }
  const onClose = (id) => {
    // porque filter.... no modifica el array original
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <div className="contenedor">
        {location.pathname === "/" ? (
          <Form login={login} />
        ) : (
          <Nav onSearch={onSearch} />
        )}
        <Routes>
          <Route
            path="/home"
            element={<Cards onClose={onClose} characters={characters} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:detailId" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

//el : de detailID indica que es una variable
