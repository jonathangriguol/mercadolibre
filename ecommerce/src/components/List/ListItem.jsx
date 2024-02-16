import React from "react";
import { Link } from "react-router-dom";
import "./ListItem.scss";

const ListItem = ({ id, thumbnail = "./no-image.jpg", title, price, location="Córdoba" }) => {
  return (
    <Link to={id} className="list-item">
      <div className="list-item__container">
        <img src={thumbnail} alt={title} className="list-item__thumbnail" />
        <div className="list-item__content">
          <div className="list-item__price">$ {price}</div>
          <div className="list-item__title">{title}</div>
        </div>
        <div className="list-item__location">
          {location}
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
