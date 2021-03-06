import React, { useEffect, useState } from 'react';
import List from './Components/List';
import Item from './Item';
import './Todo.css';
import TodoForm from './Components/TodoForm';
import Modal from './Components/Modal';

const SAVED_ITEMS = 'savedItems';
const Todo = () => {
  const [ShowModal, setShowModal] = useState(false);
  const [Items, setItems] = useState([]);

  useEffect(() => {
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    if (savedItems) {
      setItems(savedItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(Items));
  }, [Items]);

  function onAddItem(text) {
    let item = new Item(text);

    setItems([...Items, item]);
    onHideModal();
  }

  function onItemDeleted(item) {
    let filteredItems = Items.filter((it) => it.id !== item.id);

    setItems(filteredItems);
  }
  function onDone(item) {
    let updatedItems = Items.map((it) => {
      if (it.id === item.id) {
        it.done = !it.done;
      }
      return it;
    });
    setItems(updatedItems);
  }

  function onHideModal(e) {
    setShowModal(false);
  }

  return (
    <div className="container">
      <header className="header">
        <h1>TO-DO</h1>
        <button
          className="addButton"
          onClick={() => {
            setShowModal(true);
          }}
        >
          +
        </button>
      </header>
      <List onDone={onDone} onItemDeleted={onItemDeleted} Items={Items}></List>

      <Modal show={ShowModal} onHideModal={onHideModal}>
        <TodoForm onAddItem={onAddItem}></TodoForm>
      </Modal>
    </div>
  );
};

export default Todo;
