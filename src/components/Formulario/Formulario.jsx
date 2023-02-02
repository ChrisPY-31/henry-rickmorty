import React from "react";
import "./Formulario.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import { useDispatch } from "react-redux";
import { getNavigate } from "../../store/reducer/characters/character";
import { Error } from "../Erro/Error";
const user = "gokuygojan12@hormail.com";
const password = "1234";
const Formulario = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [email, setEmail] = useState(false);
  const [loading, setLoding] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        console.log("empezo");
        setLoding(false);
        console.log("termino");
        navigate("/home");
        dispatch(getNavigate());
      }, 3000);
    }
  }, [loading]);
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('click')
    if ([input.email, input.password].includes("")) {
      console.log('first')
      setError(true);
    }
    else if (input.email === user && input.password === password) {
      setLoding(true);
      setEmail(true);
    }
  };
  return (
    <div className="form">
      
      {email ? (
        <Loading />
      ) : (
        <div className="form__container">

        <img className="form__image" src="https://playbyplaytoys.es/wp-content/uploads/2021/01/rickymorty_bleed.png" alt="" />
        <form action="" onSubmit={handleSubmit} className="form__input">
          {error && <Error/> }
          <div className="form__div">
            <label htmlFor="" className="form__label">
              UserName
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="form__email"
              placeholder="Ingresa tu Email"
              autoFocus
            />
            <label htmlFor="" className="form__label">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="form__email"
              placeholder="Ingresa tu Contraseña"
            />
            <button className="form__boton">acceder</button>
          </div>
        </form>
        </div>
      )}
    </div>
  );
};

export { Formulario };
