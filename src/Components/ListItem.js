import React from 'react';
import Card from './Card';
import './List.css';
function DoneImg(props) {
  if (props.done) {
    return <img src="tick.jpg" alt="tick" />;
  }
  return <img src="x.jpg" alt="x" />;
}
function ListItem(props) {
  return (
    <li >
      <Card className={props.item.done ? 'done item' : 'item'}>
        {props.item.text}
        <div>
          <button
            onClick={() => {
              props.onDone(props.item);
            }}
            className="btn"
          >
            <DoneImg done={props.item.done}></DoneImg>
          </button>
          <button
            className="btn"
            onClick={() => {
              props.onItemDeleted(props.item);
            }}
          >
            <img src={'trash.png'} alt="trash-icon"></img>
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ListItem;
