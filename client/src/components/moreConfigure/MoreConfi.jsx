import React from "react";
import './MoreConfi.css'
import { useDispatch } from "react-redux";
import { getDesenFavo, getSearchChara } from "../../store/reducer/characters/character";

const MoreConfi = () => {
    const dispatch = useDispatch()

    const handleChange = (e)=>{
        dispatch(getDesenFavo(e.target.value))
    }
  return (
    <div className="more">
      <div className="more__container">
        <select name="order" className="more__select" onChange={handleChange}>
          <option value="All">All</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>

        <form action="" className="more__form">
          <input 
          type="text"  
          className="more__input" 
          placeholder="Search Characters"
          autoFocus
          onChange={(e)=> dispatch(getSearchChara(e.target.value))} 
           />
          <button className="more__boton ">Search</button>
        </form>
      </div>
    </div>
  );
};

export { MoreConfi };
