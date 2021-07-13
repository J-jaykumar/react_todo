import React from 'react'

export const Todoitems = ({todo, onDelate}) => {
    return (
        <div>
            <h4> {todo.title}</h4>
            <h4> {todo.desc}</h4>
            <button className="btn btn-sm btn-danger" onClick={ ()=>{onDelate(todo)}}>Delate</button>
        </div>
    )
}

