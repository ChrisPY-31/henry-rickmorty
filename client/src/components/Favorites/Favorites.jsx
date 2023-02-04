import React from "react";
import { useSelector , useDispatch} from "react-redux";
import { getCharaDelete, getDelete, getFavoCharacters } from "../../store/reducer/characters/character";
import { DeleFavo } from "../DeleteFavo/DeleFavo";
import { Person } from "../VacioPerson/Person";
import './Favorites.css'
const Favorites = () => {
  const dispath = useDispatch()
  const { favorites ,charaDelete } = useSelector((state) => state.character);

  console.log(favorites);
  const handleDelete = (favo)=>{
    dispath(getFavoCharacters(favo))
    dispath(getCharaDelete())
  }
  // ()=>dispath(getDelete(favo.id))
  return (
    <div className="favorites">
      {charaDelete && <DeleFavo/>}
      <div className="row ">
        {favorites.length === 0?<Person/>:favorites.map((favo) => (
          <div className="col-3 favorites__container mx-5" key={favo.id}>
            <div className="favorites__cerrar" onClick={()=>handleDelete(favo)}>X</div>
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
