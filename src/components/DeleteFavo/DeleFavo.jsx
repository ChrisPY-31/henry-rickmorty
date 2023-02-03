import React ,{useEffect, useState} from "react";
import "./DeleFavo.css";
import { useSelector , useDispatch} from "react-redux";
import { Cerrar } from "../Cerrar/Cerrar";
import { getCharaDelete, getDelete } from "../../store/reducer/characters/character";

const DeleFavo = () => {
  const { favoCharacter ,charaDelete} = useSelector((state) => state.character);
  const [eliminar , setEliminar] = useState(false)
  const dispatch = useDispatch()
  const handleDelete = ()=>{
    setEliminar(true)
    
  }
  useEffect(()=>{
    if(eliminar){
        setTimeout(()=>{
            dispatch(getDelete(favoCharacter.id))
            setEliminar(false)
            dispatch(getCharaDelete())
        },2000)
    }
  },[eliminar])
  return (
    <div className="deleFavo">
        {eliminar&&<Cerrar/>}
      <div className="deleFavo__container">
        <div className="delefavo__res">
          <h2 className="delefavo__h2">¿Quieres eliminar este Character?</h2>
          <p className="delefavo__parafo">
            Si lo deseas eliminar este articulo , ya no podras verlo a menos de que deses
            agregarlo de nuevo por lo que tu seguridad nos importa demasiado
          </p>
          <div className="delefavo__objeto">
            <img className="delefavo__img" src={favoCharacter.image} alt="" />
            <h3 className="delefavo__name">{favoCharacter.name}</h3>
          </div>
          <div className="deleFavo__desicion">
            <button className="deleFavo__cancelar" onClick={()=>dispatch(getCharaDelete())}>Cancelar</button>
            <button className="deleFavo__eliminar" onClick={handleDelete}>Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DeleFavo };
