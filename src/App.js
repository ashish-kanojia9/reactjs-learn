import React from 'react'
import './App.css';
import { useState } from 'react';
const App = () => {
  const[todo, setTodo] = useState("");
  const[todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(editId){
      const editTD=todos.find((i)=>i.id === editId);
      const updatedTD = todos.map((t)=>
      t.id===editTD.id? 
      (t={id:t.id,todo}):
      {id:t.id,todo:t.todo}
      );
      setTodos(updatedTD);
      setEditId(0)
      setTodo("")
      return
    }
    if(todo!==""){
      setTodos([{id: `${todo}-${Date.now()}`,todo }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete=(id)=>{
    const delTD = todos.filter((de)=>de.id !== id)
    setTodos([...delTD])
    setEditId(id)
  }

  const handleEdit=(id)=>{
    const editTD=todos.find((e)=>e.id===id)
    setTodo(editTD.todo)
  }
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo List</h1>
        <form className="todoform" onSubmit={handleSubmit}>
          <input type = 'text'value={todo} onChange={(e) => setTodo(e.target.value)}/>
          <button type="submit">{editId? "Edit" : "GO"}</button>
        </form>

        <ul className="allTD">
          {
            todos.map((t) => (
            <li className="singleTD">
              <span className="tdTx" key={t.id}>
                {t.todo}
              </span>
              <button onClick={()=>handleEdit(t.id)}>Edit</button>
              <button onClick={()=>handleDelete(t.id)}>Delete</button>
            </li>
            ))
          }
        </ul>
      </div>      
    </div>
  );
};

export default App
