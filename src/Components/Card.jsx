import React from "react";
import { NavLink } from "react-router-dom";

export default function Card(props) {
    const {imgsrc,title} = props ;
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={imgsrc} className="card-img-top" alt={imgsrc} />
          <div className="card-body">
            <h5 className="card-title Cardtitle">{title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="/ " className="btn btn-primary">
              Order Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
