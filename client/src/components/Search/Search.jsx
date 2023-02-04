import React, { useState } from "react";
import { Character } from "../Character/Character";
import { Person } from "../VacioPerson/Person";
import "./Search.css";

const Search = () => {
  const [input, setInput] = useState("");
  const [characters, setCharacters] = useState([]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  const handleClick = (e) => {
    e.preventDefault();
    onSearch(input);
  };
  const handleDelete = (id) =>{
    console.log(id)
    const deleteChara = characters.filter(chara => chara.id !== id)
    setCharacters(deleteChara)
  }
  return (
    <div className="search">
      <form action="" onSubmit={handleClick} className="search__form">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          className="search__input"
          autoFocus
        />
        <button className="btn btn-outline-primary">Enviar</button>
      </form>
      {characters.length === 0 ? (
        <Person />
      ) : (
       <div className="container search__container">
        { characters.map(chara => (
            <Character key={chara.id} chara={chara} handleDelete={handleDelete}/>
        ))}
       </div>
      )}
    </div>
  );
};

export { Search };
