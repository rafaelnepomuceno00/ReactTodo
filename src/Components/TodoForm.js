import React, { useState } from 'react'

const TodoForm = (props) => {
    const [Text, setText] = useState('')
    function handleChange(event) {
        let t = event.target.value;
        setText(t);
      }
      function addItem(event) {
          event.preventDefault()
          if(Text){
          //setItems([...Items,Text])
          props.onAddItem(Text)
          setText('')}
      }
    return (
        <form>
        <input onChange={handleChange} type="text" value={Text}/>
        <button onClick={addItem}>add</button>
      </form>
    )
}

export default TodoForm
