import React from "react";
import IconPNG from "../images/icon.png";

function Card(props) {
  let location;
  location = props.item.location.toUpperCase();
  // console.log(location);

  let URL;
  URL = <i></i>;

  return (
    <div className="card">
      <img className="card-image" src={props.item.imageUrl}></img>
      <div className="card-section-right">
        <div className="card-location-section">
          <img className="icon" src={IconPNG}></img>
          <span>{location}</span>
          <a className="card-url" href={props.item.googleMapsUrl} target="none">
            View on Google Maps
          </a>
        </div>
        <span className="card-title">
          <b>{props.item.title}</b>
        </span>
        <span className="card-dates">
          <b>
            {props.item.startDate} - {props.item.endDate}{" "}
          </b>
        </span>
        <span>{props.item.description}</span>
      </div>
    </div>
  );
}

export default Card;
