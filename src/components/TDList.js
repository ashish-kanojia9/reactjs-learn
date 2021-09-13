import React from 'react'

const TDList = ({todos,handleEdit,handleDelete}) => {
    return (
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
    )
}

export default TDList
