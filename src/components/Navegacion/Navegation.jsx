import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getNavigate } from "../../store/reducer/characters/character";
import "./Navegacion.css";
import { Cerrar } from "../Cerrar/Cerrar";
const Navegation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [image, setImage] = useState(false);
  const [cerrar, setCerrar] = useState(false);

  const handleCerrar = () => {
    setCerrar(true);
  };
  useEffect(() => {
    if (cerrar) {
      console.log("entro");
      setTimeout(() => {
        setCerrar(false);
        dispatch(getNavigate());
        navigate("/");
      }, 4000);
    }
  }, [cerrar]);
  return (
    <nav className="nav">
      <div className="nav__container">
        <ul className="nav__ul">
          <li className="nav__li">
            <Link className="nav__link" to={"/home"}>
              Home
            </Link>
          </li>
          <li className="nav__li">
            <Link className="nav__link" to={"/about"}>
              about
            </Link>
          </li>
          <li className="nav__li">
            <Link className="nav__link" to={"/ramdon"}>
              Ramdon
            </Link>
          </li>
          <li className="nav__li">
            <Link className="nav__link" to={"/search"}>
              Buscar Personajes
            </Link>
          </li>
          <li className="nav__li">
            <Link className="nav__link" to={"/favorites"}>
              Favorites
            </Link>
          </li>
          <li className="nav__li">
            <Link className="nav__link" to={"/createPerson"}>
              CreatePerson
            </Link>
          </li>
        </ul>
        {cerrar && <Cerrar />}
        <div className="nav__user">
          <img
            className="nav__image"
            src="https://media.vandalsports.com/i/640x360/5-2022/202251816546_1.jpg"
            alt="rick"
            onClick={() => setImage(!image)}
          />
          {image && (
            <div className="nav__menu ">
              <p className="nav__configure only">Configuracion</p>
              <p className="nav__sesion only" onClick={handleCerrar}>
                Cerrar sesion
              </p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export { Navegation };
