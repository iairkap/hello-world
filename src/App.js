import React from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/nav";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Details/Detail";
function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "af4bd895c003.dd5027d1731db48b4739";

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
        <Nav onSearch={onSearch} />
        <Routes>
          <Route
            path="home"
            element={<Cards onClose={onClose} characters={characters} />}
          />
          <Route path="about" element={<About />} />
          <Route path="detail/:detailId" element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

//el : de detailID indica que es una variable
