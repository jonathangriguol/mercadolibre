import React from 'react';
import ListItem from './ListItem';
import './List.scss'

const List = ({ items }) => {
  return (
    <div className="list">
      {items?.map((item, index) => (
        <ListItem
          key={index}
          id={item.id}
          thumbnail={item.picture}
          title={item.title}
          price={item.price.amount}
        />
      ))}
    </div>
  );
}

export default List;