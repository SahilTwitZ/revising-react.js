import React from "react";
import Avtar from "./Avtar";
import Info from "./Info";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avtar img={props.img} />
      </div>
      <div className="bottom"></div>
      <Info details={props.tel} />
      <Info details={props.email} />
    </div>
  );
}

export default Card;
