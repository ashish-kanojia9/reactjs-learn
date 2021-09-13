import React from 'react';
import './App.css';
import { useState } from 'react';
import TDForm from './components/TDForm';
import TDList from './components/TDList';

const App = () => {
  const[todo, setTodo] = useState("");
  const[todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(editId){
      const editTD=todos.find((i)=>i.id === editId);
      const updatedTD = todos.map((t) => t.id===editTD.id ? (t={id:t.id,todo}): {id:t.id,todo:t.todo});
      setTodos(updatedTD);
      setEditId(0);
      setTodo("");
      return;
    }
    if(todo!==""){
      setTodos([{id: `${todo}-${Date.now()}`,todo }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete=(id)=>{
    const delTD = todos.filter((de)=>de.id !== id);
    setTodos([...delTD]);
    // setEditId(id)
  }

  const handleEdit=(id)=>{
    const editTD=todos.find((e)=>e.id===id);
    setTodo(editTD.todo);
    setEditId(id);
  }
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo List</h1>
        <TDForm handleSubmit={handleSubmit}
        todo={todo}
        editId={editId}
        setTodo={setTodo}/>
    

        <TDList
        todos={todos}
        handleEdit={handleEdit}
        handleDelete={handleDelete}/>
      </div>      
    </div>
  );
};

export default App
