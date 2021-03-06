import React from 'react';
import './List.css';
import ListItem from './ListItem';

function List(props) {
  return (
    <ul>
      {props.Items.map((item) => (
         <ListItem item={item} key={item.id} onDone={props.onDone} onItemDeleted={props.onItemDeleted}></ListItem>
      ))}
    </ul>
  );
}

export default List;
