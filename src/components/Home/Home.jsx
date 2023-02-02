import { useEffect, useState } from "react";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { getApi } from "../../store/reducer/characters/thunk";
import { Pagination } from "../Pagination/Pagination";
import { getFavorites } from "../../store/reducer/characters/character";
import { AddFavorites } from "../addFavorites/addFavorites";
import { getDetail } from "../../store/reducer/characters/character";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const Home = () => {
  const {id} = useParams
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state.character);
  const [page, setPage] = useState(1);
  const [isFav, setIsfav] = useState(false);

  useEffect(() => {
    dispatch(getApi(page));
  }, [page]);
  useEffect(()=>{
    if(isFav){
      console.log('siiiiiiuu')
      setTimeout(()=>{
        setIsfav(false)
      },3000)
    }
  },[isFav])

  const handleFavorite = (chara) => {
    setIsfav(true)
    dispatch(getFavorites(chara))
  };

  const handleDetailt = (chara)=>{
    dispatch(getDetail(chara))
    navigate(`/detail/${chara.id}`)
  }
  return (
    <div className="home">
      {isFav&& <AddFavorites/>}
      <Pagination page={page} setPage={setPage} />
      <div className="home__grid">
        {characters.map((chara) => (
          <div className="home__character" key={chara.id}>
            <img src={chara.image} alt={chara.name} className="home__image" onClick={()=>handleDetailt(chara)}/>
            <h3 className="text-center text-light">{chara.name}</h3>
            <button className="home__btn" onClick={()=> handleFavorite(chara)}>Add to Favorites</button>
          </div>
        ))}
        
      </div>
     
    </div>
  );
};

export { Home };
