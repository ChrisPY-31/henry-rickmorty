import React from "react";
import './Character.css'

const Character = ({ chara ,handleDelete}) => {
  const { name, gender, species, image ,id} = chara;

 
  return (
    <div className="character">
      <div className="character__cerrar text-center" onClick={()=>handleDelete(id)}>X</div>
      <div className="card ">
        <img src={image} alt="" className="card-image" />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <h5 className="card-subtitle">{gender}</h5>
          <h6 className="card-text">{species}</h6>
        </div>
      </div>
    </div>
  );
};

export { Character };
