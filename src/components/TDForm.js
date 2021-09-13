import React from 'react'

const TDForm = ({handleSubmit,todo,editId,setTodo}) => {
    return (
        <form className="todoform" onSubmit={handleSubmit}>
          <input
            type = 'text'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}/>
          <button type="submit">{editId? "Edit" : "GO"}</button>
        </form>
    )
}

export default TDForm
