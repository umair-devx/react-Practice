import React, { useState } from 'react'

const App = () => {
  const {task , settask} = useState("")
  const {todo , settodo} = useState([])

  function addtask(){
    if(task.trim()=== "") return;
    settodo([...todo,task]);
    settask("")
  }

  function delettask(index){
    const updattodos = todo.filter((item,i) => i !== index);
    settodo(updattodos)

  }

  return (
    <div>
      <h1>TooDo App</h1>
      <input type="text" placeholder='Enter your Todo' value={task} onChange={(e)=>settask(e.target.value)} />
      <button onClick={addtask}>Add</button>
      <ul>
        {todo.map((item,index)=>(
          <li>
            {item}
            <button onClick={delettask}>Remove</button>
          </li>
        ))}
      </ul>


    </div>
  )
}

export default App
