import { useEffect } from "react";
import { useSelector ,  } from "react-redux";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import { Detail } from "./components/Detail/Detail";
import { Formulario } from "./components/Formulario/Formulario";
import { Favorites } from "./components/Favorites/Favorites";
import { Home } from "./components/Home/Home";
import { Ramdon } from "./components/Ramdon";
import { Search } from "./components/Search/Search";
import { Navegation } from "./components/Navegacion/Navegation";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate()
  const {isNavigate } = useSelector(state=> state.character )


  useEffect(()=>{
    !isNavigate &&  navigate('/')
   
  },[isNavigate])

  return (
    <div className="App">
      {isNavigate&& <Navegation/>}
    <Routes>
      <Route path="/" element={<Formulario/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/ramdon" element={<Ramdon/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
    </Routes>

    </div>
  );
}

export default App;
