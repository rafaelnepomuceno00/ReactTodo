import React from 'react';
import './List.css';
const Card = (props) => {
  return (
    <div className={props.className ? `${props.className} card` : 'card'}>
      {props.children}
    </div>
  );
};

export default Card;
