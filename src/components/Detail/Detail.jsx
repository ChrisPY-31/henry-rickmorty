import React from "react";
import { useSelector } from "react-redux";
import './Detail.css'

const Detail = () => {
  const { detail } = useSelector((state) => state.character);
  console.log(detail);
  return (
    <div className="detail">
      <div className="detail__container">
        <div className="detail__page1">
          <img className="detail__image" src={detail.image} alt="" />
        </div>
        <div className="detail__page2 mx-5">
            <h3 className="text-white font-bold fs-1 ">Origin: {detail.origin.name}</h3>
            <h3 className="text-white font-bold fs-1 ">Name: {detail.name}</h3>
            <h3 className="text-white font-bold fs-1 ">Location: {detail.location.name}</h3>
            <h4 className="text-white font-bold fs-1 ">Gender: {detail.gender}</h4>
            <h4 className="text-white font-bold fs-1 ">Species: {detail.species}</h4>
            <h5 className="text-white font-bold fs-1 ">Status: {detail.status}</h5>

        </div>
      </div>
    </div>
  );
};

export { Detail };
