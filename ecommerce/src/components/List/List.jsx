import React, { Fragment } from "react";
import ListItem from "./ListItem";
import "./List.scss";

const List = ({ items }) => {
  return (
    <div className="list">
      {items?.map((item, index) => (
        <Fragment key={index}>
          <ListItem
            id={item.id}
            thumbnail={item.picture}
            title={item.title}
            price={item.price.amount}
          />
          {index < items.length - 1 ? (
            <div className="list__divider"></div>
          ) : (
            ""
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default List;
