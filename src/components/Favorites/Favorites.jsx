import React from "react";
import { useSelector , useDispatch} from "react-redux";
import { getDelete } from "../../store/reducer/characters/character";
import { Person } from "../VacioPerson/Person";
import './Favorites.css'
const Favorites = () => {
  const dispath = useDispatch()
  const { favorites } = useSelector((state) => state.character);
  console.log(favorites);
  return (
    <div className="container ">
      <div className="row mt-5">
        {favorites.length === 0?<Person/>:favorites.map((favo) => (
          <div className="col-3 favorites mx-5" key={favo.id}>
            <div className="favorites__cerrar" onClick={()=>dispath(getDelete(favo.id))}>X</div>
            <div className="card">
              <img src={favo.image} alt="" className="card-image" />
              <div className="card-body">
                <h4 className="card-title">{favo.name}</h4>
                <h5 className="card-subtitle">{favo.gender}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Favorites };
